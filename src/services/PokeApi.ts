import axios from "axios";


import type {Poke } from '../types/Poke'
import type { PokeListItem } from "../types/PokeListItem";

interface PokeResponse{
    pokes: Poke[] | null
}
interface PokeListResponse {
    results: PokeListItem[];
  }


const api = axios.create({
    baseURL:'https://pokeapi.co/api/v2/'
})

export async function fetchPoke(idOrName: number | string): Promise<Poke> {
    try {
      // 1) Detalhes básicos
      const basic = await api.get(`pokemon/${idOrName}`);
      // 2) Espécies (contém descrições)
      const species = await api.get(`pokemon-species/${idOrName}`);
  
      // Extrai dados da resposta básica
      const data = basic.data;
      const front_default = data.sprites.front_default;
      const front_shiny   = data.sprites.front_shiny;
      const name          = data.name;
      const order         = data.order;
  
      // Filtra flavor_text_entries em inglês
      const entries = species.data.flavor_text_entries
        .filter((e: any) => e.language.name === "en");
  
      // Pega o primeiro (ou defina lógica própria: último entry, versão específica etc.)
      const description = entries.length > 0
        ? entries[0].flavor_text.replace(/\n|\f/g, " ")
        : "Descrição não disponível.";
  
      return { front_default, front_shiny, name, order, description };
    } catch (error) {
      console.error("Erro ao buscar Pokémon e descrição:", error);
      throw error;
    }
  }

  export async function fetchPokeList(
    limit = 20,
    offset = 0
  ): Promise<PokeListItem[]> {
    try {
      const response = await api.get<PokeListResponse>(
        `pokemon?limit=${limit}&offset=${offset}`
      );
      return response.data.results;
    } catch (error) {
      console.error("Erro ao buscar lista de Pokémon:", error);
      throw error;
    }
  }