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
