import React from 'react';
import ReactDOM from 'react-dom';

import Reviews from './components/Reviews'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import reducers from './reducers'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Reviews/>
  </Provider>, document.getElementById('Reviews')
);

module.hot.accept();
