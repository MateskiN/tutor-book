// In-memory data store
const tutors = [
  { id: 1, name: 'Tutor 1', subjects: ['Math', 'Physics'], hourlyRate: 30 },
  { id: 2, name: 'Tutor 2', subjects: ['Science', 'Biology'], hourlyRate: 35 },
  { id: 3, name: 'Tutor 3', subjects: ['English', 'History', 'Swedish'], hourlyRate: 40 },
  { id: 4, name: 'Tutor 4', subjects: ['Physics', 'Biology'], hourlyRate: 35 }
];

// const availability = [
//   { tutorId: 1, date: '2025-07-02', slots: ['09:00', '10:00', '11:00'] },
//   { tutorId: 2, date: '2025-07-02', slots: ['13:00', '14:00'] },
//   { tutorId: 3, date: '2025-07-02', slots: ['10:00', '15:00', '16:00'] },
//   { tutorId: 4, date: '2025-07-02', slots: ['12:00', '13:00', '18:00'] }
// ];

const bookings = [];

export default { tutors, bookings };