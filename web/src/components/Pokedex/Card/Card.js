import React from 'react';
import './Card.css';
import CardTypes from './types/Types'

const PokedexCard = ({ pokemonsData }) => {

    return (
        <div className="pokedex-card">
            <div className="pokedex-card__display">
                <div className="pokedex-card__display-name-id">
                    <div className="pokedex-card__display-name">
                        <strong>Name: </strong>{pokemonsData.name}
                    </div>
                    <div className="pokedex-card__display-id">
                        <strong>ID: </strong>{pokemonsData.id}
                    </div>
                </div>
                <div className="pokedex-card__display-image">
                    <img src={pokemonsData.ThumbnailImage} alt=""></img>
                </div>
                <div className="pokedex-card__display-types">
                {pokemonsData.type.map(type => (
                    <CardTypes types={type} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default PokedexCard;