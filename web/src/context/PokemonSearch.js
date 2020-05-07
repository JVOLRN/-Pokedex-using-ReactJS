import React, { createContext, useState, useContext } from 'react';

const PokemonSearchContext = createContext();


export default function PokemonSearchProvider({ children }) {
    const [pokemonSearch, setPokemonSearch] = useState("");

    return <PokemonSearchContext.Provider value={
        {
            pokemonSearch,
            setPokemonSearch
        }
    }>{children}</PokemonSearchContext.Provider>
}

export function usePokemonSearch() {
    const context = useContext(PokemonSearchContext);

    const { pokemonSearch, setPokemonSearch } = context;

    return { pokemonSearch, setPokemonSearch };
}

