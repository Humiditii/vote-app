import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bone from './containers/Bone/Bone';
import HomePage from './containers/pages/HomePage/HomePage';
import Signup from './containers/pages/AuthPages/Signup/Signup';
import Signin from './containers/pages/AuthPages/Signin/Signin';
import Dashboard from './containers/pages/Dashboard/Dashboard';


function App() {
  return (
    <div>
     <Bone>
        <Switch>
          <Route path='/register' component={Signup} />
          <Route path='/login' component={Signin} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/' exact component={HomePage} /> 
        </Switch>
     </Bone>
    </div>
  );
}

export default App;
