import React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
  slots: string[];
  selectedSlot: string;
  setSelectedSlot: (slot: string) => void;
}
const SlotSelect: React.FC<Props> = ({ slots, selectedSlot, setSelectedSlot }) => (
  <Form.Group className="mb-3">
    <Form.Label>Time Slot</Form.Label>
    <Form.Select
      value={selectedSlot}
      onChange={e => setSelectedSlot(e.target.value)}
      disabled={!slots.length}
    >
      <option value="">Select Slot</option>
      {slots.map(slot => (
        <option key={slot} value={slot}>{slot}</option>
      ))}
    </Form.Select>
  </Form.Group>
);
export default SlotSelect;
