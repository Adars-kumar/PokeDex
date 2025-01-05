import { useEffect, useState } from "react";
import "./PokemonList.css";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
  const [pokemnonList, setPokemonList] = useState([]);
  const [pokedex_url, setPokedexUrl] = useState(DEFAULT_URL);
  const [nextUrl, setNextUrl] = useState(DEFAULT_URL)
  const [prevUrl, setPrevUrl] = useState(DEFAULT_URL)
  

  async function downloadPokemon() {
    const response = await axios.get(pokedex_url ? pokedex_url : DEFAULT_URL);

    const pokemonResult = response.data.results; //array of pokemnon

    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);

    const pokemonPromise = pokemonResult.map((pokemon) =>
      axios.get(pokemon.url)
    );

    const pokemonListData = await axios.all(pokemonPromise);

    const pokemonFinalList = pokemonListData.map((pokemonData) => {
      const pokemon = pokemonData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types,
      };
    });
    setPokemonList(pokemonFinalList);

    console.log(pokemonFinalList);
  }

  useEffect(() => {
    downloadPokemon();
  }, [pokedex_url]); //if we pass [] empty array dependcies don't re-rendered. Change of any variable doesn't affect

  return (
    <>
      <div className="pokemonList-wrapper">
        <div >
            <h1>Pokemon list</h1>
        </div>
        <div className="page-controls">
          <button onClick={()=> setPokedexUrl(prevUrl)}>Prev</button>
          <button onClick={()=> setPokedexUrl(nextUrl)}>Next</button>
        </div>
        <div className="pokemon-list">
          {pokemnonList.map((pokemon) => (
            <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PokemonList;
