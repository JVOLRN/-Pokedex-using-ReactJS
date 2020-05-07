import React from 'react';
import './Header.css';
import HeaderDetail from './Detail/Detail';
import HeaderInput from './Input/Input';

const PokedexHeader = () => {
    return(
        <div className="pokedex-header">
            <HeaderDetail />
            <HeaderInput />
        </div>
    );
}

export default PokedexHeader;