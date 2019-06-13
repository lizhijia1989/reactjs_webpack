import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../pages/components/header.js';
import index from '../pages/index.js';
import login from '../pages/login.js';
import learning from '../pages/learning.js';

const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Route exact path="/" component={index} />
      <Route path="/login" component={login}></Route>
      <Route path="/learning" component={learning}></Route>
    </Fragment>
  </BrowserRouter>
);
export default AppRouter;