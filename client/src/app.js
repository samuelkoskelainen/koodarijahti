import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Lobby from '../src/Components/Lobby/Lobby'
import Game from '../src/Components/Game/Game'
import ErrorPage from '../src/Components/Error/Error'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Lobby} />
        <Route path="/:client" exact component={Game} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default App;