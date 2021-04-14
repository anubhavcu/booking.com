import React from 'react';
import { Row, Form, Col } from 'react-bootstrap';

const Search = ({ searchingText }) => {
  return (
    <Form.Group as={Row} controlId='formHorizontalText'>
      <Form.Label column sm={2}>
        Search Cities
      </Form.Label>
      <Col sm={10}>
        <Form.Control
          type='text'
          placeholder='Search Cities..'
          onChange={(e) => searchingText(e.target.value)}
        />
      </Col>
      <br />
    </Form.Group>
  );
};

export default Search;
