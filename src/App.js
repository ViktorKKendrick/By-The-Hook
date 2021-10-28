import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css'
import Navbar from './Components/myNav.js';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
   return (
  <Router>
      <Navbar />
    <Switch>
        <Route exact path='/SignUp'>
            <SignUp/>
        </Route>
        <Route exact path='/Login'>
            <Login/>
        </Route>
        {/* <Route exact path='/Dashboard'>
            <Dash/>
        </Route> */}
        <Route path={["/", '*']}>
              <Home />
            </Route>
    </Switch>

  </Router>
  );
}

export default App;
