import express from 'express';
const router = express.Router();
import mockData from '../data/mockData.js';

// Helper to generate slots for a day: 09:00 to 17:00
function generateSlots() {
  const slots = [];
  for (let hour = 9; hour <= 17; hour++) {
    slots.push(hour.toString().padStart(2, '0') + ':00');
  }
  return slots;
}

router.get('/', (req, res) => {
  const { tutorId, date } = req.query;
  if (!tutorId || !date) return res.json({ slots: [] });

  const allSlots = generateSlots();
  const bookedSlots = mockData.bookings
    .filter(b => b.tutorId === parseInt(tutorId) && b.date === date)
    .map(b => b.slot);

  const availableSlots = allSlots.filter(slot => !bookedSlots.includes(slot));
  res.json({ slots: availableSlots });
});

export default router;
