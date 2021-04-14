import React, { useState } from 'react';
import { Container, Col, Form, FormLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PaymentWindow = () => {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  return (
    <Container>
      <Link className='btn btn-dark my-3 customHover' to='/payment'>
        Back
      </Link>

      <Col>
        <Form.Group>
          <FormLabel as='legend'>Select Payment Method</FormLabel>
        </Form.Group>
        <Form.Check
          type='radio'
          label='Paytm UPI'
          name='paymentMethod'
          value='Upi'
          onChangeCapture={(e) => setPaymentMethod(e.target.value)}
        ></Form.Check>
        <Form.Check
          type='radio'
          label='Debit or Credit Card'
          name='paymentMethod'
          value='Card'
          onChangeCapture={(e) => setPaymentMethod(e.target.value)}
        ></Form.Check>
        <br></br>
        <br></br>
      </Col>

      {paymentMethod === 'Upi' && (
        <>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Enter Upi ID : </Form.Label>
            <Form.Control type='text' placeholder='anubhav@upi.com' />
          </Form.Group>
          <Link to='/success'>
            <Button variant='primary'>Submit</Button>
          </Link>
        </>
      )}
      {paymentMethod === 'Card' && (
        <div>
          <Form.Group controlId='formBasicText'>
            <Form.Label>Enter Card Number : </Form.Label>
            <Form.Control type='text' placeholder='2313-4322-1234' />
          </Form.Group>
          <Form.Group controlId='formBasic'>
            <Form.Label>Exp. Date : </Form.Label>
            <Form.Control type='text' placeholder='mm/yyyy' />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>CVV : </Form.Label>
            <Form.Control type='text' placeholder='123' />
          </Form.Group>
          <Link to='/success'>
            <Button variant='primary'>Submit</Button>{' '}
          </Link>
        </div>
      )}
    </Container>
  );
};

export default PaymentWindow;
