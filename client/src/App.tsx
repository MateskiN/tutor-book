import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => (
  <Router>
    <Header />
    <Container className="mt-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Container>
    <Footer />
  </Router>
);

export default App;
