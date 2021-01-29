import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import Home from './components/Home';
import BlogDetails from './components/BlogDetails';
import Create from './components/Create';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="/blogs/create">
            <Create />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
