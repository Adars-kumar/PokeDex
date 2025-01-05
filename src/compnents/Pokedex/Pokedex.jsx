// import ing css
import "./Pokedex.css";
import Search from '../Search/Search';
import PokemonList from "../PokemonList/PokemonList";


function Pokedex() {
  return(
    <div className="pokedex-wrapper">
        <h1>POKEDOX</h1>
        <Search />
        <PokemonList />
    </div>
  ) 
}
export default Pokedex;
