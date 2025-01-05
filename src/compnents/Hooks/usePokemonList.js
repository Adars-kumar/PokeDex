
import { useEffect, useState } from "react";
import downloadPokemon from "../utils/downloadPokemon";

function usePokemonList(DEFAULT_URL) {
    
    const [pokemonListState, setPokemonListState] = useState({
        pokemnonList: [],
        pokedex_url: DEFAULT_URL,
        nextUrl: DEFAULT_URL,
        prevUrl: DEFAULT_URL
    });
    useEffect(() => {
        downloadPokemon(pokemonListState, setPokemonListState, DEFAULT_URL);
    }, [pokemonListState.pokedex_url]); //if we pass [] empty array dependcies don't re-rendered. Change of any variable doesn't affect

    return[pokemonListState,setPokemonListState];
}

export default usePokemonList;