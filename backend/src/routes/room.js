const express = require("express");
const router = express.Router();

const Room = require('../model/Room.js');

router.get("/getallrooms", async (req, res) => {

    try {

        const rooms = await Room.find({});

        return res.json({ rooms });

    } catch (error) {

        return res.status(400).json({ message: error });
    }

});

router.post("/getroombyid", async (req, res) => {

    const roomid = req.body.roomid;

    try {

        const room = await Room.findOne({_id : roomid});

        return res.send(room);

    } catch (error) {

        return res.status(400).json({ message: error });
    }

});

module.exports = router;