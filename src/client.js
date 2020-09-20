import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routes from './routes'
// import * as serviceWorker from './serviceWorker';

const { INITIAL_STORE_STATE: initialStoreState = {} } = window;
const store = createStore(
  reducers,
  initialStoreState,
  applyMiddleware(thunk)
)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      { renderRoutes(Routes) }
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
