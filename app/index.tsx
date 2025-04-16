import { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import { fetchPokemon } from "../services/pokeApi";

export default function HomeScreen() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState<any>(null);

  const handleSearch = async () => {
    const data = await fetchPokemon(pokemonName.toLowerCase());
    setPokemon(data);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logonovo.png')} style={styles.pokebolaimage}/>
      <Text style={styles.title}>Pokédex</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do Pokémon"
        value={pokemonName}
        onChangeText={setPokemonName}
        onSubmitEditing={handleSearch} // Adiciona a busca ao pressionar "Enter"
        returnKeyType="search"
      />
      <Button title="Buscar" onPress={handleSearch} />
      {pokemon && (
        <View style={styles.pokemonContainer}>
          <Text style={styles.pokemonName}>{pokemon.name.toUpperCase()}</Text>
          <Image source={{ uri: pokemon.sprites.front_default }} style={styles.pokemonImage} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "",

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
    marginVertical: 10,
    textAlign: "center",
  },
  pokemonContainer: {
    alignItems: "center",
    marginTop: 10,
    
  },
  pokemonName: {
    fontSize: 20,
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  pokebolaimage: {
      width: 200,
      height: 200,
      marginTop: 150

  }

  
});
