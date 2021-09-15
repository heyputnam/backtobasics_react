//import react and reactDOM

import React from 'react';
import ReactDOM from 'react-dom';

//create react component

const App = ()=> {
  return(
    <div>
    <h1>Hi there!</h1>
    </div>
  )
}

// take component and show on screen

ReactDOM.render(
  <App/>,
  //reference to html file in public directory (div id=root)
  document.querySelector('#root')
);
