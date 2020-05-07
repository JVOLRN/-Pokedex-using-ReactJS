import React from 'react';
import './List.css';
import PokedexCard from '../Card/Card';

const PokedexList = ({ pokedexList }) => {
    return (
        <div className="pokedex-list">
            {

                pokedexList.map((pokemon, index) => (
                   <PokedexCard key={index} pokemonsData={pokemon} />
                ))
            }
        </div>
    );
}

export default PokedexList