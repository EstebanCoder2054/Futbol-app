import React from 'react';

import {Switch, Route} from 'react-router-dom';

//vistas
import Home from './views/Home';
import Competencias from './views/Competencias';
import Equipos from './views/Equipos';
import Paises from './views/Paises';

const Main = () => {
    return(
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/competencias" component={Competencias} />
            <Route exact path="/equipos" component={Equipos} />
            <Route exact path="/paises" component={Paises} />
        </Switch>
    )
}

export default Main;