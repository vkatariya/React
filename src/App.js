import React from 'react';
//import logo from './logo.svg';
import Menu from './components/Menu';
//import Home from './components/Home';
import About from './components/About';
import Avatar from './components/Avatar';
import Contact from './components/Contact';

import Product from './components/Product';

import './App.css';
//import '../components/home.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
<div>
    <Menu />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/avatar" component={Avatar} />
    
    <Route path="/contact" component={Contact} />
    <Route path="/productlist" component={Product} />
    </Switch>
</div>
</BrowserRouter>
  );
}
const Home= ()=>{
  
  return (<div className="home_body">
  <h1>hello</h1>
  <p>Welcome to Home Page</p>
  
  </div>
  )

}

export default App;
