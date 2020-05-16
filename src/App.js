import React from 'react';
import Bone from './containers/Bone/Bone';
import classes from './App.module.css';

function App() {
  const pages = [1,2,3,5,6]
  return (
    <div>
     <Bone>
       {pages.map( (item,index)=> (
           <h1 className={classes.bone} key={index} >pages{item}</h1>
       ))}
     </Bone>
    </div>
  );
}

export default App;
