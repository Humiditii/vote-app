import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bone from './containers/Bone/Bone';
import HomePage from './containers/pages/HomePage/HomePage';
import Signup from './containers/pages/AuthPages/Signup/Signup';
import Signin from './containers/pages/AuthPages/Signin/Signin';


function App() {
  return (
    <div>
     <Bone>
        <Switch>
          <Route path='/register' component={Signup} />
          <Route path='/login' component={Signin} />
          <Route path='/' exact component={HomePage} /> 
        </Switch>
     </Bone>
    </div>
  );
}

export default App;
