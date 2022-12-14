import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Error from '../../components/Error.jsx';
import Loader from '../../components/Loader.jsx';

const Booking = ({ match }) => {

    const [room, setRoom] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const roomid = match.params.roomid;
    const fromdate = moment(match.params.fromdate, 'DD-MM-YYYY');
    const todate = moment(match.params.todate, 'DD-MM-YYYY');

    const totaldays = moment.duration(todate.diff(fromdate)).asDays() + 1;
    // const totalamount = totaldays * room.rentperday;

    const [totalamount, setTotalamount] = useState();

    useEffect(() => {

        getRoomDetails();

    }, []);

    const getRoomDetails = async () => {

        try {

            setLoading(true);
            const data = (await axios.post("/api/rooms/getroombyid", {roomid: match.params.roomid})).data;
            setTotalamount(data.rentperday * totaldays);
            setRoom(data);
            setLoading(false);

        } catch (error) {

            setError(true);
            setLoading(false);
        }
    }

    const bookRoom = async () => {

        const bookingDetails = {

            room,
            userid:JSON.parse(localStorage.getItem('currentUser'))._id,
            fromdate,
            todate,
            totalamount,
            totaldays
        }

        try {

          const result = await axios.post('/api/bookings/bookroom', bookingDetails);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container mt-md-5'>

            {loading ? (<Loader />) : room ? (<div>

                <div className='row shadow p-3'>

                   <div className='col-md-5'>

                    <img className='img-fluid' src={room.imageurls[0]} alt="" />

                   </div>

                   <div className='col-md-5'>

                   <h4> Name: { room.name } </h4>
                   <h4> Book By: { JSON.parse(localStorage.getItem('currentUser')).name } </h4>
                   <h4> From Date: {match.params.fromdate} </h4>
                    <h4> To Date: {match.params.todate} </h4>
                   <h4> Max Count: { room.maxcount } </h4>

                   <h1> Amount </h1>

                   <h4> Total Days: { totaldays }  </h4>
                   <h4> Rent Per Day: { room.rentperday } </h4>
                   <h4> Total Amount: { totalamount } </h4>

                   <button className='btn btn-dark' onClick={bookRoom}> Pay Now </button>

                   </div>

                </div>

            </div>) : (<Error />)}

        </div>
    )
}

export default Booking;