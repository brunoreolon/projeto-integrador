import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import Logon from './pages/Login'
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroDemanda from './pages/CadastroDemanda';
import Home from './pages/Home';
import Demanda from './pages/Demanda';
import Aprovar from './pages/Coordenador';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/logon" component={Logon} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
                <Route path="/cadastro-demanda" component={CadastroDemanda} />
                <Route path="/demanda" component={Demanda} />
                <Route path="/coordenador" component={Aprovar} />
            </Switch>
        </BrowserRouter>
    );
}