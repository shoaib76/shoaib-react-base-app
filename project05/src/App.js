import React, { useState, useEffect } from 'react';
import { Shoes } from './comunents/Shoes';
import './App.css';
import { Cart } from './comunents/Cart';
import  List  from './comunents/List';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';

const NotFound = () => (<div><h1>Not found</h1></div>)
const Home = () => (<div><h1>Hi from Home</h1></div>)
const About = () => (<div><h1>Hi from About</h1><Outlet/></div>)
const Aboutindex = () => (<ul>{Object.entries(Shoes).map(([abc,{name,img}]) => (
<Link to={`/About/${abc}`}><li key={abc}><h1>{name}</h1><h2>{img}</h2></li></Link>
))}
</ul>
)

const Aboutshoes = ()  => {
  const { abc } = useParams();
  const sho = Shoes[abc];
  const { name, img } = sho;

return (<div>{name} image {img}</div>
          )
};

function App() {
  
  
  return (
    
   <List/>
    
  );
}

export default App;
