// =======================
// Tipos da API
// =======================
export interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
  };
}

export interface PokemonSpeciesResponse {
  flavor_text_entries: FlavorTextEntry[];
}

export interface PokemonStatApi {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonTypeSlot {
  slot: number;
  type: {
    name: string;
  };
}

// Sprites da API (genérico para suportar official-artwork, showdown, home, etc)
export interface PokemonSpritesOther {
  [key: string]: {
    front_default?: string;
    front_shiny?: string;
    [key: string]: any;
  };
}

export interface PokemonSprites {
  other: PokemonSpritesOther;
  front_default: string;
  front_shiny: string;
  [key: string]: any;
}

// Resposta completa do endpoint /pokemon
export interface PokemonResponse {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonTypeSlot[];
  stats?: PokemonStatApi[];
}

// =======================
// Tipos usados no app
// =======================
export interface PokemonStat {
  name: string;
  value: number;
}

export interface PokeDetails {
  id: number;
  name: string;
  image: string;
  shiny: string;
  types: string[];
  description: string;
  stats: PokemonStat[];
}

export interface PokeList {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export interface PokeListItem {
  name: string;
  url: string;
}
