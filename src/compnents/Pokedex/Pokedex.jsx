// import ing css
import "./Pokedex.css";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import { useState } from "react";
import PokemonDetails from "../../PokemonDetails/PokemonDetials";

function Pokedex() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pokedex-wrapper">
      <h1>POKEDOX</h1>
      <Search updateSearchTerm={setSearchTerm} />
      {searchTerm ? <PokemonDetails pokemonName={searchTerm}/> : <PokemonList />}
    </div>
  );
}
export default Pokedex;
