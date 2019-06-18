import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Header from '../pages/components/header.js';
import index from '../pages/index.js';
import login from '../pages/login.js';
import cssModule from '../pages/cssModule.js';

const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      {/* <Header /> */}
      <Route exact path="/" component={index} />
      <Route path="/cssModule" component={cssModule}></Route>
      <Route path="/login" component={login}></Route>
    </Fragment>
  </BrowserRouter>
);
export default AppRouter;