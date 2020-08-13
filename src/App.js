import React from 'react';
import { Store } from './comunents/Store';
import './App.css';
import { Cart } from './comunents/Cart';
import  List  from './comunents/List';

function App() {
  return (
    
      <Store>
        <Cart/>
        <List/>

      </Store>
    
  );
}

export default App;
