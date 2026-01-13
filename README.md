## Pokédex em React:

  Este projeto é uma **Pokédex interativa** desenvolvida com **React** e **TypeScript**, que consome dados da **PokeAPI**.  
  A aplicação permite buscar e visualizar informações detalhadas sobre diversos Pokémon de forma simples e intuitiva.


## Funcionalidades:

- Busca por nome ou número do Pokémon
- Exibição de detalhes como imagem, número e descrição
- Carregamento incremental de Pokémon
- Interface responsiva
- Estilização utilizando **styled-components**

## Tecnologias Utilizadas:

- React
- TypeScript
- Axios
- React Router
- Styled Components

## Estrutura do Projeto

```text
src/
├── components/           # Componentes reutilizáveis
│   ├── Navbar/           # Barra de navegação com busca e toggle de tema
│   └── PokeCard/         # Card do Pokémon exibido na Home
│
├── pages/                # Páginas principais da aplicação
│   ├── Home.tsx          # Página inicial com grid de Pokémon
│   └── PokeDetails.tsx   # Detalhes do Pokémon (stats, shiny toggle, evoluções)
│
├── services/             # Comunicação com a PokeAPI
│   └── PokeApi.ts        # Funções fetchPokeList, fetchPoke, etc.
│
├── styles/               # Estilos globais e sistema de temas
│   ├── global.ts         # Estilos globais e reset CSS
│   ├── themes.ts         # Temas (lightTheme e darkTheme)
│   └── styled.d.ts       # Extensão de tipagem do styled-components
│
├── types/                # Tipagens TypeScript
│   └── types.ts          # Interfaces (PokeDetails, PokemonStat, etc.)
│
├── utils/                # Funções utilitárias
│   └── statsUtils.ts     # Normalização e cores dos status
```
## Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install

# Execute a aplicação
npm run dev
# ou
yarn dev

