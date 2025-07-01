import React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
  date: string;
  setDate: (date: string) => void;
}
const DatePicker: React.FC<Props> = ({ date, setDate }) => (
  <Form.Group className="mb-3">
    <Form.Label>Date</Form.Label>
    <Form.Control
      type="date"
      value={date}
      onChange={e => setDate(e.target.value)}
    />
  </Form.Group>
);
export default DatePicker;
