import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//import React from 'react';
import ReactCardFlip from 'react-easy-flip';

const CardFlip = () => {
  const [a,b] = useState(false);

  const hancl = () => {
    b(!a);
  }
  return (
     <ReactCardFlip isFlipped={a} flipDirection="vertecil">

    </ReactCardFlip>
  )
}

ReactDOM.render(
  
    <CardFlip/>,

  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
