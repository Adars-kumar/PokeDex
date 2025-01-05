
import useDebounce from '../Hooks/useDebounce';
import './Search.css'

function Search({updateSearchTerm}){
    const debouncUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value));
    return(
        <input 
            id='search-pokemon'
            type='text' 
            placeholder='which pokemon you are looking for ?'
            onChange={debouncUpdateSearch}

        />
    )
}

export default Search;