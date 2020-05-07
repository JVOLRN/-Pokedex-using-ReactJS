import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import PokemonSearchProvider from '../context/PokemonSearch';
import PagesPokedexSearch from './Pokedex/Search/Search'

const Root = () => {

    return (
        <PokemonSearchProvider>
            <Router>
                <Switch >
                    <Route path="/" component={PagesPokedexSearch} />
                </Switch>
            </Router>
        </PokemonSearchProvider>
    );
}

export default Root;