import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router-dom'
import history from './history'
import Analytics from './utils/analytics'

Analytics.initialize({ environment: process.env.NODE_ENV })
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
