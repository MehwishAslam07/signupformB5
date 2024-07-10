import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './Signup/Signup'
import Login from './Login/Login'

const App = () => {
  const [isloggedIn,setIsLoggedIn] = useState(true)

  const toggle = ()=>{
    setIsLoggedIn(!isloggedIn)
  }
  return (

    <div>

      {
        isloggedIn ?<Login clickFunc={toggle}/>:  <Signup clickFunc={toggle}/>
      }

    

    </div>
  );
};

export default App;