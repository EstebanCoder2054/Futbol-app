import React from 'react';

import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

function App() {
  return (
    <div className="App">
        <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Title" scroll>
                  <Navigation>
                      <Link to="/home">Home</Link>
                      <Link to="/competencias">Competencias</Link>
                      <Link to="/equipos">Equipos</Link> 
                      <Link to="/paises">Paises</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/home">Home</Link>
                      <Link to="/competencias">Competencias</Link>
                      <Link to="/equipos">Equipos</Link> 
                      <Link to="/paises">Paises</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main /> 
              </Content>
          </Layout>
      </div>
    </div>
  );
}

export default App;
