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
  evolution_chain?: {
    url: string;
  };
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

export interface PokemonAbility {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

export interface PokemonSpritesOther {
  'official-artwork': {
    front_default: string;
    front_shiny: string;
  };
  showdown?: {
    front_default: string;
    front_shiny: string;
  };
  home?: {
    front_default: string;
    front_shiny: string;
  };
  [key: string]: any;
}

export interface PokemonSprites {
  other: PokemonSpritesOther;
  front_default: string;
  front_shiny: string;
  [key: string]: any;
}

export interface PokemonResponse {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonTypeSlot[];
  stats?: PokemonStatApi[];
  weight: number;
  height: number;
  abilities: PokemonAbility[];
  base_experience?: number;
}

export interface EvolutionChain {
  chain: {
    species: {
      name: string;
      url: string;
    };
    evolves_to: EvolutionChain[];
  };
}

export interface EvolutionChainItem {
  id: number;
  name: string;
  image: string;
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
  weight: number;
  height: number;
  abilities: string[];
  base_experience?: number;
  evolutions?: EvolutionChainItem[];
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