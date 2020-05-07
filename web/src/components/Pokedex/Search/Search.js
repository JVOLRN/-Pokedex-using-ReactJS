import React, { useEffect, useState } from 'react';
import './Search.css';
import PokedexHeader from '../Header/Header';
import PokedexList from '../List/List';
import PokedexFooter from '../Footer/Footer';
import { usePokemonSearch } from '../../../context/PokemonSearch';
import axios from 'axios';

const PokedexSearch = () => {



    const [pokemons, setPokemons] = useState([]);
    const { pokemonSearch } = usePokemonSearch();



    useEffect(() => {
        const params = {};
        if (pokemonSearch !== "") {
            params.name_like = pokemonSearch;
        }

        axios.get("http://localhost:3004/data", { params })
            .then(response => setPokemons(response.data.filter((pokemonValue, index, array) => {
                return index === 0 ? true : pokemonValue.name !== array[index - 1].name ? true : false;
            })))


    }, [pokemonSearch]);



    return (
        <div>
            <PokedexHeader />
            <div className="pokedex-search">
                {(pokemons.length !== 0 && pokemons !== undefined) && (<PokedexList pokedexList={pokemons} />)}
            </div>
            <PokedexFooter />
        </div>
    );
}

export default PokedexSearch
