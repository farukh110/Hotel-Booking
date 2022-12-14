const express = require("express");
const app = express();

const dbConfig = require('./database/db');
const roomsRoute = require('./routes/room');
const usersRoute = require('./routes/user');
const bookingsRoute = require('./routes/bookings');

app.use(express.json());

app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingsRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {

    console.log(`server is up and running localhost:${port}`);
});