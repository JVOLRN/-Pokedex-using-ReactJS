import React, { useEffect, useState } from 'react';
import './Search.js';
import axios from 'axios';
import PokedexList from '../List/List'

const PokedexSearch = () => {



    const [pokemons, setPokemons] = useState([]);




    useEffect(() => {
        axios.get("https://gist.githubusercontent.com/coderdiaz/633125b46490f2ffa3b21ebeaa0cf6e2/raw/763b3d6c856010555e92adb889b6b342dfe51063")
        .then(response => setPokemons(response.data.filter((pokemonValue, index, array)=>{
            return index === 0 ? true : pokemonValue.name !== array[index - 1].name ? true : false;
        })))
    }, []);



    return (
        <div className="pokedex-search">
            {(pokemons.length !== 0 && pokemons !== undefined) && (<PokedexList pokedexList={pokemons} />)}
        </div>
    );
}

export default PokedexSearch
