// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // Propriedades existentes
    background: string;
    text: string;
    link: string;
    navbarBackground: string;
    cardBackground: string;
    inputBackground: string;
    buttonBackground: string;
    buttonColor: string;
    color: string;
    inputcolor: string;
    fundo: string;
    logo: string;
    pokeNumber: string;
    primary: string;
    secondary: string;
    hover: string;
    
    // Novas propriedades
    border: string;
    cardShadow: string;
    success: string;
    warning: string;
    danger: string;
    typeColors: Record<string, string>;
  }
}