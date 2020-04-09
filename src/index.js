import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import multi from 'redux-multi' 
import thunk from 'redux-thunk' 
 
import * as serviceWorker from './serviceWorker'

import App from './containers/_app/App'
import reducers from './containers/_app/reducers'

import './index.css'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
