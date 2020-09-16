import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import NewsPage from 'pages/NewsPage'
import UserPage from 'pages/UserPage'
import NotFoundPage from 'pages/NotFoundPage'

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/new/:id' component={NewsPage} />
      <Route path='/profile/:id' component={UserPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
)
export default App
