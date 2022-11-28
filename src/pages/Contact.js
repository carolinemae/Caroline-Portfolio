import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Contact() {

  const data = {'access_token': 'f9l8i7h23paysblze5mfwlet'};

  const [showModal, setShowModal] = useState(false);
  const modalDisplay = () => {
      setShowModal(current => !current);
  }

  function sendEmail(event) {
    event.preventDefault();

    const request = new XMLHttpRequest();

    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    data['subject'] = 'New Contact Form Submission';
    data['text'] = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`;
    const params = toParams(data);

    try {
      request.open('POST', "https://postmail.invotes.com/send", true);
      request.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
      request.send(params);
      modalDisplay();
    } catch (error) {
      console.error(error);
    }
    return false;
  }

  function toParams(data) {
    let form_data = [];
    for (var key in data) {
      form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return form_data.join('&');
  }

  return (
    <div className='anchor contact' id='contact'>
      <Form className='contact-form' onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Caroline Thomson" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" placeholder="0459 525 350" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="carolinemaee@live.com" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Hello" required />
        </Form.Group>
        <div className='btn-span'>
          <button className='contact-btn' type="submit">
            Send
          </button>
        </div>
      </Form>
      <Modal show={showModal}>
        <Modal.Body>
            <p>Message sent!</p>
        </Modal.Body>
        <Modal.Footer>
            <button className='modal-btn' onClick={modalDisplay}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
