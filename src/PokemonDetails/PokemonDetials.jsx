import "./PokemonDetails.css";
import { Link } from "react-router-dom";
// import custom hooks
import usePokemon from "../compnents/Hooks/usePokemon";
import Pokemon from "../compnents/Pokemon/Pokemon";

function PokemonDetails({pokemonName}) {
  
  const [pokemon, pokemonListState] = usePokemon(pokemonName);

  return (
    <>
      <h1 className="pokedex-redirect">
        <Link to="/">Pokedex</Link>
      </h1>
      {pokemon && (
        <div className="pokemon-details-wrapper">
          <div className="pokemon-detail-name">{pokemon.name}</div>
          <div className="pokemon-image">
            <img src={pokemon.image} />
          </div>
          <div className="pokemon-attr">
            <div>height: {pokemon.height}</div>
            <div>weight: {pokemon.weight}</div>
          </div>
          <div className="pokemon-types">
            <h1>Type:</h1>
            {pokemon.types.map((t) => (
              <span className="type" key={t.type.name}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="similar-pokemon">
        <h2>Similar Pokemons</h2>
        <div className="pokemon-similar-boxes">
          {pokemonListState.pokemnonList.length > 0 &&
            pokemonListState.pokemnonList.map((pokemon) => (
              <Pokemon
                name={pokemon.name}
                key={pokemon.id}
                url={pokemon.image}
                id={pokemon.id}
              />
            ))}
          
        </div>
      </div>
    </>
  );
}

export default PokemonDetails;
