import React from 'react';
import { Form } from 'react-bootstrap';

interface Tutor {
  id: number;
  name: string;
  subjects: string[];
  hourlyRate: number;
}

interface Props {
  tutors: Tutor[];
  selectedTutor: number | null;
  setSelectedTutor: (id: number) => void;
}

const TutorSelect: React.FC<Props> = ({ tutors, selectedTutor, setSelectedTutor }) => (
  <Form.Group className="mb-3">
    <Form.Label>Tutor</Form.Label>
    <Form.Select
      value={selectedTutor || ''}
      onChange={e => setSelectedTutor(Number(e.target.value))}
    >
      <option value="">Select Tutor</option>
      {tutors.map(tutor => (
        <option key={tutor.id} value={tutor.id}>
          {tutor.name}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

export default TutorSelect;
