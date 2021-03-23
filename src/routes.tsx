import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MonsterPage from './pages/Monster';
import Monsters from './pages/Monsters';


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/monster/:id" component={MonsterPage} />
      <Route path="/monsters" component={Monsters} />
    </Switch>
  )
}