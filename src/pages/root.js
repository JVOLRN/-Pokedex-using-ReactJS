import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PagesPokedexSearch from './Pokedex/Search/Search'

const Root = () => {

    return(
        <Router>
            <Switch >
                <Route path="/" component={PagesPokedexSearch}/>
            </Switch>
        </Router>
    );
}

export default Root;