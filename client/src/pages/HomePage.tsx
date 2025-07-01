import React from 'react';
import { Card } from 'react-bootstrap';

const HomePage: React.FC = () => (
  <Card>
    <Card.Body>
      <Card.Title>Welcome to the Tutor Booking System</Card.Title>
      <Card.Text>
        Use the navigation above to book a session with one of our tutors!
      </Card.Text>
    </Card.Body>
  </Card>
);
export default HomePage;
