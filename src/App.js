import React from 'react';
import { Route , Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import shopPage from './pages/shopPage/shop.component';
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component';
import Header from './components/header/Header.component';




function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={shopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
       </Switch>
    </div> 
  );
}

export default App;
