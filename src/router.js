import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Teams from './Pages/TeamsPage';
import TechnologiesListPages from './Pages/TechnologiesList';
import BrandingPage from './Pages/BrandingPage';

function Routers(){
 return(
  <Router>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/teams' component={Teams} />
          <Route exact path='/technologies_list' component={TechnologiesListPages} />
          <Route exact path='/branding_page' component={BrandingPage} />
      </Switch>
  </Router>
 )
}
export default Routers;