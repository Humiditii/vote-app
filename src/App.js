import React from 'react';
import Bone from './containers/Bone/Bone';
import HomePage from './containers/pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
     <Bone>
        <div className='container'>
        <Switch>
          <Route path='/' exact component={HomePage} /> 
        </Switch>
        </div>
     </Bone>
    </div>
  );
}

export default App;
