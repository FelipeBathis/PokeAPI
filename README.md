# PokeAPI
# Pokédex App
Este projeto é um aplicativo mobile desenvolvido em React Native que permite buscar informações sobre Pokémon usando a PokéAPI. O app tem uma interface simples onde o usuário pode digitar o nome de um Pokémon e visualizar sua imagem e nome.

## Funcionalidades
- Busca de Pokémon pelo nome.
- Exibição de imagem e nome do Pokémon consultado.
- Interface responsiva e intuitiva para facilitar o uso.

## Tecnologias utilizadas
- React Native
- Expo (caso esteja rodando no ambiente Expo)
- Axios para requisições HTTP
- PokéAPI para obter os dados dos Pokémon.

## Estrutura do projeto
/assets        # Imagens do projeto
/services      # Arquivo responsável pela comunicação com a API
/screens       # Tela principal do app
App.js         # Arquivo de entrada do aplicativo


## Como executar o projeto
- Clone este repositório:git clone https://github.com/seu-usuario/pokedex-app.git
cd pokedex-app

- Instale as dependências:npm install

- Execute o projeto:npm start


## Comunicação com a API (pokeApi.ts)

O arquivo abaixo faz a requisição dos dados do Pokémon utilizando Axios.
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemon = async (name: string) => {
  try {
    const response = await axios.get(`${API_URL}/${name}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    return null;
  }
};


## Estilos
Os estilos são gerenciados com StyleSheet, garantindo uma interface agradável e organizada.

## Melhorias futuras
- Adicionar exibição de tipo do Pokémon.
- Melhorar o design com animações.
- Implementar busca por ID além do nome.

