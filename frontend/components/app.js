import React from 'react';
import HeaderBar from './header_bar/header_bar_container';
import NavBar from './nav_bar/nav_bar_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session_form/session_form_container';
import BusinessIndexContainer from './business_index/business_index_container';
import BusinessShowContainer from './business_show/business_show_container';

const App = () => (
  <div>
    <header>
      <div className="main-header">
        <div className='main-header-wrapper'>
          <HeaderBar />
        </div>

        <div className='header-nav-wrapper'>
          <NavBar />
        </div>
      </div>

    </header>

    <main>
      <div className='main-wrapper'>
        <div className='top-bar'>
        </div>
        <div className='content-container'>
          <AuthRoute path="/login" component={SessionFormContainer} />
          <AuthRoute path="/signup" component={SessionFormContainer} />
          <Route exact path="/" component={BusinessIndexContainer} />
          <Route path="/businesses/:businessId" component={BusinessShowContainer} />
        </div>
      </div>
    </main>
  </div>
);

export default App;
