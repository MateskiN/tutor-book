import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const getTutors = () => api.get('/tutors');
export const getAvailability = (tutorId: number, date: string) => api.get(`/availability?tutorId=${tutorId}&date=${date}`);
export const createBooking = (data: {
    tutorId: number,
    date: string,
    slot: string,
    studentName: string;
    subject: string;
}) => api.post('/bookings', data);