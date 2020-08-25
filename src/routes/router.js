import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { withAnalytics } from '../hocs/withAnalytics'
import { withAnalyticsAndHeader } from '../hocs/withAnalyticsAndHeader'
import { About } from '../pages/About/About'
import { NotFound } from '../pages/NotFound/NotFound'
import { SignUp } from '../pages/SignUp/SignUp'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={withAnalyticsAndHeader(Home)} />
      <Route path="/sobre" component={withAnalyticsAndHeader(About)} />
      <Route path="/cadastrar" component={withAnalyticsAndHeader(SignUp)} />
      <Route component={withAnalytics(NotFound)} />
    </Switch>
  </BrowserRouter>
)

export default Routes
