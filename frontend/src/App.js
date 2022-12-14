import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import './App.css';
import Home from './pages/Home/Home.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Booking from './pages/Booking/Booking.jsx';
import Register from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx';

const App = () => {
  return (
    <>
      <Router>

        <Navbar />

        {/* <Switch> */}
          <Route path='/' exact component={Home} />
          <Route path='/book/:roomid/:fromdate/:todate' exact component={Booking} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
        {/* </Switch> */}

      </Router>
    </>
  )
}

export default App;