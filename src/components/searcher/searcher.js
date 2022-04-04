
import React , { useState } from 'react';
import { SearchStyle } from './searcher.style';
import { useNavigate } from "react-router-dom";

const Search = () => {

  const [searchText, setSearchText] = useState(null);

  const navigate = useNavigate();

  const searchInfo = (event) => {
    event.preventDefault();
    navigate(process.env.PUBLIC_URL + '/search?toSearch='+searchText);
  }

  return (
      <SearchStyle>
        <form>
          <input type='text' onChange={e => setSearchText(e.target.value)} placeholder='God of war, Tomb Raider ... ' />
          <button onClick={searchInfo}>Buscar</button>
        </form>
      </SearchStyle> 
    );

}

export default Search;