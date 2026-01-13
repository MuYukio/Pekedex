import axios from "axios";

import type {
  PokeDetails,
  PokemonStat,
  PokeList,
  PokeListItem,
  PokemonResponse,
  PokemonSpeciesResponse,
  PokemonTypeSlot,
  EvolutionChain,
  EvolutionChainItem
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
   Função auxiliar para cadeia de evolução
============================ */
async function fetchEvolutionChain(idOrName: number | string): Promise<EvolutionChainItem[]> {
  try {
   
    const speciesRes = await api.get<PokemonSpeciesResponse>(`pokemon-species/${idOrName}`);
    
   
    if (!speciesRes.data.evolution_chain?.url) {
      return [];
    }

  
    const evolutionRes = await axios.get<EvolutionChain>(speciesRes.data.evolution_chain.url);
    const evolutions: EvolutionChainItem[] = [];

  
    function extractEvolutions(chain: any) {
      const species = chain.species;
      const id = species.url.split('/').filter(Boolean).pop();
      
      if (id) {
        evolutions.push({
          id: parseInt(id),
          name: species.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        });
      }


      if (chain.evolves_to && chain.evolves_to.length > 0) {
        chain.evolves_to.forEach((next: any) => extractEvolutions(next));
      }
    }

    extractEvolutions(evolutionRes.data.chain);
    
    return evolutions.sort((a, b) => a.id - b.id);
    
  } catch (error) {
    console.warn("Não foi possível carregar a cadeia de evolução:", error);
    return [];
  }
}

/* ============================
   Detalhes (completo)
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

  const portugueseEntry = species.flavor_text_entries.find(
    entry => entry.language.name === "pt"
  );
  
  const englishEntry = species.flavor_text_entries.find(
    entry => entry.language.name === "en"
  );

  const description = portugueseEntry?.flavor_text.replace(/\n|\f/g, " ") ??
                     englishEntry?.flavor_text.replace(/\n|\f/g, " ") ??
                     "Descrição não disponível.";

  
  const stats: PokemonStat[] =
    pokemon.stats?.map(s => ({
      name: s.stat.name.replace('-', ' '),
      value: s.base_stat
    })) ?? [];


  const official = pokemon.sprites.other["official-artwork"];


  const evolutionsPromise = fetchEvolutionChain(idOrName);

  
  const abilities = pokemon.abilities
    .map(ability => ability.ability.name.replace('-', ' '))
    .slice(0, 3); 


  const evolutions = await evolutionsPromise;

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
    stats,
    weight: pokemon.weight,
    height: pokemon.height,
    abilities: abilities,
    base_experience: pokemon.base_experience,
    evolutions: evolutions.length > 0 ? evolutions : undefined,
  };
}