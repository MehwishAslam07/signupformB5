import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css'



const Login = ({clickFunc}) => {
  return (
    <div className={`text-center bg-dark text-white p-5 ${styles.loginwrap}`}>
      <h1>Login</h1>
      <p>Please enter your login and password!</p>

    
      <Form className={styles.formwrap}>
        
      <Form.Group className="mb-3 " controlId="typeEmailX"  >
        <Form.Control type="email" placeholder="Enter email"              />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
Login
      </Button>
    </Form>
      <a href="#" onClick={clickFunc}>Create an account</a>

    
      </div>
   
  )
}

export default Login
