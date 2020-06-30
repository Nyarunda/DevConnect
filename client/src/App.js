import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import Register_Login from './components/Auth/User_Login_Register';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/'>
          <Layout />
        </Route>
        <Switch>
          <Route path='/register'>
            <Register_Login />
          </Route>
          <Route path='/login'>
            <Register_Login />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
