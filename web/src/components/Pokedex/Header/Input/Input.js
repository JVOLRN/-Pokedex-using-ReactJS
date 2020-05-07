import React, { useState } from 'react';
import './Input.css';
import { usePokemonSearch } from '../../../../context/PokemonSearch';


const HeaderInput = () => {


    const [search, setSearch] = useState("");
    const { setPokemonSearch } = usePokemonSearch();

    const updateSearch = (event) => {
        setSearch(event.target.value);
        setPokemonSearch(event.target.value);
    }

    return (
        <div className="pokedex-header__form">
            <input className="pokedex-header__form-input" placeholder="Pokemon name" value={search} onChange={updateSearch}></input>
        </div>
    );
}

export default HeaderInput;