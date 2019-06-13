import React from 'react';
import ReactDOM from 'react-dom';

// 公共样式需要在router引入前先引入，不然会被各route的css覆盖
import './css/base.css';

import AppRouter from './router/router.js';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('app')
);