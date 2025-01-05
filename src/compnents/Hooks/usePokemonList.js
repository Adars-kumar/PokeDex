import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList() {

    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
    // const [pokemnonList, setPokemonList] = useState([]);
    // const [pokedex_url, setPokedexUrl] = useState(DEFAULT_URL);
    // const [nextUrl, setNextUrl] = useState(DEFAULT_URL)
    // const [prevUrl, setPrevUrl] = useState(DEFAULT_URL)

    const [pokemonListState, setPokemonListState] = useState({
        pokemnonList: [],
        pokedex_url: DEFAULT_URL,
        nextUrl: DEFAULT_URL,
        prevUrl: DEFAULT_URL
    });


    async function downloadPokemon() {
        const response = await axios.get(pokemonListState.pokedex_url ? pokemonListState.pokedex_url : DEFAULT_URL);

        const pokemonResult = response.data.results; //array of pokemnon

        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);
        // setPokemonListState((state)=> ({...state, nextUrl: response.data.next, prevUrl: response.data.previous}));

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
            }
        });

        // setPokemonList(pokemonFinalList);
        setPokemonListState({ ...pokemonListState, pokemnonList: pokemonFinalList, nextUrl: response.data.next, prevUrl: response.data.previous });

    }

    useEffect(() => {
        downloadPokemon();
    }, [pokemonListState.pokedex_url]); //if we pass [] empty array dependcies don't re-rendered. Change of any variable doesn't affect

    return[pokemonListState,setPokemonListState];
}

export default usePokemonList;