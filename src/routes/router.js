import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { withAnalytics } from '../hocs/withAnalytics'
import { About } from '../pages/About/About'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={withAnalytics(Home)} />
      <Route path="/sobre" component={withAnalytics(About)} />
    </Switch>
  </BrowserRouter>
)

export default Routes
