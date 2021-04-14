import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';

const Login = () => {
  return (
    <FormContainer>
      <Link className='btn btn-dark my-3 customHover' to='/'>
        Back
      </Link>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      <Form>
        {/* using temporary link for now, should be a submit form  */}
        <Link className='btn btn-dark my-3 customHover' to='/profile'>
          Login
        </Link>
        <Link className='btn btn-dark my-3 mx-3 customHover' to='/signup'>
          Sign Up
        </Link>
      </Form>
    </FormContainer>
  );
};

export default Login;
