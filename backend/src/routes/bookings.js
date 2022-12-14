const express = require("express");
const Booking = require("../model/Booking");
const Room = require("../model/Room");
const moment = require("momnet");
const router = express.Router();

router.post("/bookroom", async (req, res) => {

    const { room, userid, fromdate, todate, totalamount, totaldays } = req.body;

    try {

        const newBooking = new Booking({

            name: room.name,
            roomid: room._id,
            userid,
            fromdate: moment(fromdate).format('DD-MM-YYYY'),
            todate: moment(todate).format('DD-MM-YYYY'),
            totalamount,
            totaldays,
            transactionId: '1234'
        });

        const booking = await newBooking.save();

        const roomtemp = await Room.findOne({_id: room._id});

        roomtemp.currentbookings.push({
            bookingid: booking._id,
            fromdate: moment(fromdate).format('DD-MM-YYYY'),
            todate: moment(todate).format('DD-MM-YYYY'),
            userid: userid,
            status: booking.status
        });

        await roomtemp.save();

        res.send("Room booked successfully");

    } catch (error) {

        return res.status(400).json({ message: error });
    }
});

module.exports = router;