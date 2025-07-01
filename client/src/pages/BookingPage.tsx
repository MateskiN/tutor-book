import React, { useState, useEffect } from 'react';
import TutorSelect from '../components/TutorSelect';
import DatePicker from '../components/DatePicker';
import SlotSelect from '../components/SlotSelect';
import BookingForm from '../components/BookingForm';
import { getTutors, getAvailability, createBooking } from '../services/api';
import { Form } from 'react-bootstrap';

interface Tutor {
  id: number;
  name: string;
  subjects: string[];
  hourlyRate: number;
}

const BookingPage: React.FC = () => {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [selectedTutor, setSelectedTutor] = useState<number | null>(null);
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0,10));
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [studentName, setStudentName] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    getTutors().then(res => setTutors(res.data));
  }, []);

  useEffect(() => {
    if (selectedTutor && date) {
      getAvailability(selectedTutor, date).then(res => setSlots(res.data.slots || []));
    } else {
      setSlots([]);
    }
    setSelectedSlot('');
    setSelectedSubject('');
  }, [selectedTutor, date]);

  const handleBooking = () => {
    if (!selectedTutor || !selectedSlot || !studentName || !selectedSubject) {
      setMessage('Please complete all fields');
      return;
    }
    createBooking({ tutorId: selectedTutor, date, slot: selectedSlot, studentName, subject: selectedSubject })
      .then(res => {
        setMessage(res.data.message);
        // Refresh slots
        getAvailability(selectedTutor, date).then(res => setSlots(res.data.slots || []));
      })
      .catch(err => {
        setMessage(err.response?.data?.error || 'Booking failed');
      });
  };

  const tutor = tutors.find(t => t.id === selectedTutor);

  return (
    <div className="p-4 border rounded shadow-sm">
      <h1 className="mb-4">Book a Tutor Session</h1>
      <TutorSelect tutors={tutors} selectedTutor={selectedTutor} setSelectedTutor={setSelectedTutor} />
      {tutor && (
        <div className="mb-3">
          <strong>Subjects:</strong> {tutor.subjects.join(', ')}<br />
          <strong>Hourly Rate:</strong> ${tutor.hourlyRate}
        </div>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Select
          value={selectedSubject}
          onChange={e => setSelectedSubject(e.target.value)}
          disabled={!tutor}
        >
          <option value="">Select Subject</option>
          {tutor?.subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <DatePicker date={date} setDate={setDate} />
      <SlotSelect slots={slots} selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot} />
      {tutor && selectedSubject && selectedSlot && (
        <div className="mb-3">
          <strong>Total Price:</strong> ${tutor.hourlyRate}
        </div>
      )}
      <BookingForm studentName={studentName} setStudentName={setStudentName} handleBooking={handleBooking} message={message} />
    </div>
  );
};

export default BookingPage;
