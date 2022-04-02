import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import shopPage from './pages/shopPage/shop.component';




function App() {
  return (
    <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={shopPage} />
    </div> 
  );
}

export default App;
