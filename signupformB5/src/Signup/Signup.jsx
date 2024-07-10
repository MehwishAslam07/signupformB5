import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import React from 'react'
import styles from './Signup.module.css'

const Signup = ({clickFunc}) => {
  return (
    <div className='signup'>
         <div className={`text-center bg-dark text-white p-5 ${styles.loginwrap}`}>
      <h1>Sign Up </h1>
      <p>

We kindly invite you to create your account with us!</p>

    
      <Form className={styles.formwrap}>

      <Form.Group className="mb-3 " controlId="typeEmailX"  >
        <Form.Control type="text" placeholder="Username"              />
      </Form.Group>


      <Form.Group className="mb-3 " controlId="typeEmailX"  >
        <Form.Control type="email" placeholder="Enter email"              />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Repeat Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
Create account
      </Button>
    </Form>
    <a href="#" onClick={clickFunc} className={styles.btn}>Go to login screen</a>

    
      </div>


    </div>
  )
}

export default Signup
