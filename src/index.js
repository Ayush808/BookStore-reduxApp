import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app'
import ComboReducers from './reducers/CombineReducer'

ReactDOM.render(
  <Provider store={createStore(ComboReducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
