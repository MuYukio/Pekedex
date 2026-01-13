// src/utils/statsUtils.ts

/**
 * Normaliza um valor de stat para uma porcentagem (0-100) baseada no máximo 255.
 */
export const normalizeStat = (baseValue: number): number => {
  const max = 255; // Todos os stats agora usam 255 como máximo
  return Math.min((baseValue / max) * 100, 100);
};

/**
 * Retorna uma cor temática para cada tipo de stat.
 * (Opcional - remova se não quiser cores diferentes)
 */
export const getStatColor = (statName: string): string => {
  const colors: Record<string, string> = {
    hp: 'linear-gradient(90deg, #4caf50 0%, #8bc34a 100%)',
    attack: 'linear-gradient(90deg, #f44336 0%, #ef5350 100%)',
    defense: 'linear-gradient(90deg, #2196f3 0%, #42a5f5 100%)',
    'special-attack': 'linear-gradient(90deg, #9c27b0 0%, #ba68c8 100%)',
    'special-defense': 'linear-gradient(90deg, #009688 0%, #4db6ac 100%)',
    speed: 'linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)'
  };
  return colors[statName] || 'linear-gradient(90deg, #78909c 0%, #b0bec5 100%)';
};