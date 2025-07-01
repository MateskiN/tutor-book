import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => (
  <footer className="bg-dark text-light py-3 mt-5">
    <Container>
      <small>&copy; {new Date().getFullYear()} Tutor Booking System</small>
    </Container>
  </footer>
);

export default Footer;
