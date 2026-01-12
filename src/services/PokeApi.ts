import axios from "axios";

import type {
  PokeDetails,
  PokemonStat,
  PokeList,
  PokeListItem,
  PokemonResponse,
  PokemonSpeciesResponse,
  PokemonTypeSlot
} from "../types/types";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
});

interface PokeListResponse {
  results: PokeListItem[];
}

/* ============================
   Lista (cards)
============================ */
export async function fetchPokeListItem(name: string): Promise<PokeList> {
  const response = await api.get<PokemonResponse>(`pokemon/${name}`);

  const official = response.data.sprites.other["official-artwork"];

  return {
    id: response.data.id,
    name: response.data.name,
    image: official?.front_default ?? response.data.sprites.front_default,
    types: response.data.types.map((t: PokemonTypeSlot) => t.type.name)
  };
}

export async function fetchPokeList(
  limit = 20,
  offset = 0
): Promise<PokeListItem[]> {
  const response = await api.get<PokeListResponse>(
    `pokemon?limit=${limit}&offset=${offset}`
  );

  return response.data.results;
}

/* ============================
   Detalhes
============================ */
export async function fetchPoke(
  idOrName: number | string
): Promise<PokeDetails> {
  const [pokemonRes, speciesRes] = await Promise.all([
    api.get<PokemonResponse>(`pokemon/${idOrName}`),
    api.get<PokemonSpeciesResponse>(`pokemon-species/${idOrName}`)
  ]);

  const pokemon = pokemonRes.data;
  const species = speciesRes.data;

  const description =
    species.flavor_text_entries.find(
      entry => entry.language.name === "en"
    )?.flavor_text.replace(/\n|\f/g, " ") ??
    "Descrição não disponível.";

  const stats: PokemonStat[] =
    pokemon.stats?.map(s => ({
      name: s.stat.name,
      value: s.base_stat
    })) ?? [];

  const official = pokemon.sprites.other["official-artwork"];

  return {
    id: pokemon.id,
    name: pokemon.name,
    image: official?.front_default ?? pokemon.sprites.front_default,
    shiny:
      official?.front_shiny ??
      pokemon.sprites.front_shiny ??
      pokemon.sprites.front_default,
    types: pokemon.types.map(t => t.type.name),
    description,
    stats
  };
}
