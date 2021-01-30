import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import Home from './components/Home';
import BlogDetails from './components/BlogDetails';
import Create from './components/Create';


const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App
