import React from 'react';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const SignUp = () => {
  return (
    <FormContainer>
      <Link className='btn btn-dark my-3 customHover' to='/login'>
        Back
      </Link>
      <Form.Group controlId='formBasicEmail'>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='enter name' />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Age</Form.Label>
          <Form.Control type='number' placeholder='enter age' min={18} />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Government ID</Form.Label>
          <Form.Text className='text-muted'>* Mandatory</Form.Text>
          <Form.Control as='select'>
            <option>Aadhar</option>
            <option>Driving License</option>
            <option>Passport</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Govt. ID Number</Form.Label>
          <Form.Control type='text' placeholder='Govt. ID Number' />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type='phone' placeholder='Phone Number' />
        </Form.Group>

        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      <Form>
        {/* <Button variant='primary' onClick={handleSubmit}>
        Next
      </Button> */}
        {/* using temporary link for now, should be a submit form  */}
        <Link className='btn btn-dark my-3 customHover' to='/profile'>
          Sign Up
        </Link>
      </Form>
    </FormContainer>
  );
};

export default SignUp;
