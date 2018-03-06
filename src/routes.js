import React from 'react'
import { Route, IndexRoute, Link, Redirect } from 'react-router'

//COMPONENT
import IndexComponent from './components/index'
import UserComponent from './components/user'

//END COMPONENT

//HOC
import RequireAuth from './hoc/requireAuth'
//END HOC

const routes = (
  <Route path="/">
    <IndexRoute component={IndexComponent} />
    <Route path="/detail/:username" component={UserComponent}/>
  </Route>
)

export default routes