import express from 'express';
const router = express.Router();
import mockData from '../data/mockData.js';

router.post('/', (req, res) => {
  const { tutorId, date, slot, studentName, subject } = req.body;
  if (!tutorId || !date || !slot || !studentName || !subject)
    return res.status(400).json({ error: 'Missing required fields' });

  // Check if the tutor teaches the subject
  const tutor = mockData.tutors.find(t => t.id === parseInt(tutorId));
  if (!tutor || !tutor.subjects.includes(subject))
    return res.status(400).json({ error: 'Tutor does not teach this subject' });

  // Prevent double booking
  const existingBooking = mockData.bookings.find(
    b => b.tutorId === parseInt(tutorId) && b.date === date && b.slot === slot
  );
  if (existingBooking)
    return res.status(400).json({ error: 'Slot already booked' });

  mockData.bookings.push({
    id: mockData.bookings.length + 1,
    tutorId: parseInt(tutorId),
    date,
    slot,
    studentName,
    subject
  });
  res.status(201).json({ message: 'Booking successful' });
});

export default router;
