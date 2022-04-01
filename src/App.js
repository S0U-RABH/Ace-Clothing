import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';


 const HatsPages= (props) => {
   console.log(props);
  return (
    <div>
      <h1>HatsPages</h1>
    </div>
  )
}



function App() {
  return (
    <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPages} />
    </div> 
  );
}

export default App;
