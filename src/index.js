import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'
import {BrowserRouter as Router} from 'react-router-dom'





const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
    < App/>
    </Router>
  </Provider>,
  document.getElementById('root'));


reportWebVitals();
