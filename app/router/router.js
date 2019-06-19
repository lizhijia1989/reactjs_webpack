import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import index from '../pages/index.js';
import login from '../pages/login.js';
import cssModule from '../pages/cssModule.js';
import setState from '../pages/setState.js';
import event from '../pages/event.js';
import lifeCycle from '../pages/lifeCycle.js';

const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={index} />
      <Route path="/cssModule" component={cssModule}></Route>
      <Route path="/setState" component={setState}></Route>
      <Route path="/event" component={event}></Route>
      <Route path="/lifeCycle" component={lifeCycle}></Route>
      <Route path="/login" component={login}></Route>
    </Fragment>
  </BrowserRouter>
);
export default AppRouter;