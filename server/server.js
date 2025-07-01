import express, { json } from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());

import tutorsRouter from './routes/tutors.js';
import availabilityRouter from './routes/availability.js';
import bookingsRouter from './routes/bookings.js';

app.use('/tutors', tutorsRouter);
app.use('/availability', availabilityRouter);
app.use('/bookings', bookingsRouter);

app.listen(8080, () => console.log(`Server running on port 8080`));

export default app;