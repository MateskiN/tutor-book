// In-memory data store
const tutors = [
  { id: 1, name: 'Tutor 1', subjects: ['Math', 'Physics'], hourlyRate: 30 },
  { id: 2, name: 'Tutor 2', subjects: ['Science', 'Biology'], hourlyRate: 35 },
  { id: 3, name: 'Tutor 3', subjects: ['English', 'History', 'Swedish'], hourlyRate: 40 },
  { id: 4, name: 'Tutor 4', subjects: ['Physics', 'Biology'], hourlyRate: 35 }
];

const bookings = [];

export default { tutors, bookings };