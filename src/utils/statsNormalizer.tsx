

export const normalizeStat = (baseValue: number): number => {
  const max = 255; 
  return Math.min((baseValue / max) * 100, 100);
};

