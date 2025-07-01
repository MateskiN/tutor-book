// backend/tests/server.test.js
import request from 'supertest';
import app from '../server.js';

describe('Tutor Booking API', () => {
  it('should list all tutors', async () => {
    const res = await request(app).get('/tutors');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[0]).toHaveProperty('subjects');
    expect(res.body[0]).toHaveProperty('hourlyRate');
  });

  it('should return available slots for a tutor on a date', async () => {
    const res = await request(app).get('/availability?tutorId=1&date=2025-07-02');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.slots)).toBe(true);
    expect(res.body.slots).toContain('09:00');
  });

  it('should allow booking a session', async () => {
    const bookingData = {
      tutorId: 1,
      date: '2025-07-02',
      slot: '10:00',
      studentName: 'Test Student',
      subject: 'Math'
    };
    const res = await request(app).post('/bookings').send(bookingData);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('Booking successful');
  });

  it('should prevent double booking', async () => {
    const bookingData = {
      tutorId: 1,
      date: '2025-07-02',
      slot: '11:00',
      studentName: 'Student 1',
      subject: 'Math'
    };
    // First booking
    await request(app).post('/bookings').send(bookingData);
    // Second booking for the same slot
    const res = await request(app).post('/bookings').send(bookingData);
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Slot already booked');
  });
});
