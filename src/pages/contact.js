import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Form, Button } from 'react-bootstrap';

export default () => (
  <div>
    <Header />
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col-xs-6'>
        <Form>
  <Form.Group controlId="contactForm.Email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="contactForm.Subject">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="text" placeholder="Enter subject" />
  </Form.Group>
  <Form.Group controlId="contactForm.Message">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Enter message" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
