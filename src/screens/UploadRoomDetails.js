import React from 'react';
import { Container, Form } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';

const UploadRoomDetails = () => {
  return (
    <Container>
      <h2>Upload your property Details...</h2>
      <FormContainer>
        <Link className='btn btn-dark my-3 customHover' to='/profile'>
          Back
        </Link>
        <Form.Group controlId='formBasicEmail'>
          <Form.Group controlId='formBasicName'>
            <Form.Label>Property Name</Form.Label>
            <Form.Control type='text' placeholder='shalimar villa...' />
          </Form.Group>
          <Form.Group controlId='formBasicAge'>
            <Form.Label>Address</Form.Label>
            <Form.Control type='text' placeholder='7141 Garnet Meadows' />
          </Form.Group>

          <Form.Group controlId='formBasicNumber'>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type='phone' placeholder='05651' />
          </Form.Group>

          <Form.Group controlId='formBasicNumber'>
            <Form.Label>Landmark</Form.Label>
            <Form.Control type='text' placeholder='Suite 475' />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Number of Rooms Available</Form.Label>

            <Form.Control as='select'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Label>Facilities</Form.Label>
          <Form.Control
            type='text'
            placeholder='Free Parking, Wifi, Breakfast, Lunch, ...'
          />
          <Form.Text className='text-muted'>
            Enter entries comma seperated.
          </Form.Text>
        </Form.Group>
        <div className='mb-3'>
          <Form.Check type='checkbox' id='checkbox' label='Couple Friendly' />
        </div>
        <Form.Group>
          <Form.File id='exampleFormControlFile1' label='Upload images ' />
        </Form.Group>

        <Form>
          {/* <Button variant='primary' onClick={handleSubmit}>
            Next
          </Button> */}
          {/* using temporary link for now, should be a submit form  */}
          <Link className='btn btn-dark my-3 customHover' to='/success'>
            Submit
          </Link>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default UploadRoomDetails;
