import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

interface Props {
  studentName: string;
  setStudentName: (name: string) => void;
  handleBooking: () => void;
  message: string;
}
const BookingForm: React.FC<Props> = ({ studentName, setStudentName, handleBooking, message }) => (
  <Form.Group className="mb-3">
    <Form.Label>Your Name</Form.Label>
    <Form.Control
      type="text"
      value={studentName}
      onChange={e => setStudentName(e.target.value)}
    />
    <Button className="mt-3" onClick={handleBooking}>Book Session</Button>
    {message && (
      <Alert className="mt-3" variant={message === 'Booking successful' ? 'success' : 'danger'}>
        {message}
      </Alert>
    )}
  </Form.Group>
);
export default BookingForm;
