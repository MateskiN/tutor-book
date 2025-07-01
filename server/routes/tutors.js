import express from 'express';
const router = express.Router();
import mockData from '../data/mockData.js';

router.get('/', (req, res) => {
  res.json(mockData.tutors);
});

export default router;