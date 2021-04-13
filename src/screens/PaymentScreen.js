import React from 'react';
import { Button, Col, Container, Form, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';

const PaymentScreen = () => {
  const setPaymentMethod = (e) => {
    console.log(e);
  };
  return (
    <div>
      <FormContainer>
        <Link className='btn btn-dark my-3 customHover' to='/'>
          Home
        </Link>
        <Form.Group controlId='formBasicEmail'>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='enter name' />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Age</Form.Label>
            <Form.Control type='number' placeholder='enter age' />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='phone' placeholder='Phone Number' />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Number of Rooms</Form.Label>
            <Form.Text className='text-muted'>
              Maximum 2 people can stay in One room.
            </Form.Text>
            <Form.Control as='select'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
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
          <Form.Group>
            <FormLabel as='legend'>Select Method</FormLabel>
          </Form.Group>
          <Col>
            <Form.Check
              type='radio'
              label='Paytm UPI'
              name='paymentMethod'
              value='Paytm'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type='radio'
              label='Debit or Credit Card'
              name='paymentMethod'
              value='Card'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>

          <Button variant='primary'>Submit</Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default PaymentScreen;
