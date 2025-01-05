
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../Hooks/usePokemonList";

function PokemonList() {

  const [pokemonListState,setPokemonListState] = usePokemonList();
  
  return (
    <>
      <div className="pokemonList-wrapper">
        <div >
            <h1>Pokemon list</h1>
        </div>
        <div className="page-controls">
          <button onClick={()=> setPokemonListState({...pokemonListState, pokedex_url: pokemonListState.prevUrl})}>Prev</button>

          <button onClick={()=> setPokemonListState({...pokemonListState, pokedex_url: pokemonListState.nextUrl})}>Next</button>

        </div>
        <div className="pokemon-list">
          {pokemonListState.pokemnonList.map((pokemon) => (
            <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PokemonList;
