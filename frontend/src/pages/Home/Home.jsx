import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../../components/room/Room.jsx';
import Loader from '../../components/Loader.jsx';
import Error from '../../components/Error.jsx';
import 'antd/dist/reset.css';
import { DatePicker, Space } from 'antd';

import moment from 'moment';

const Home = () => {

    const { RangePicker } = DatePicker;

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();

    useEffect(() => {

        getAllRooms();

    }, []);

    const getAllRooms = async () => {

        try {

            setLoading(true);
            const data = (await axios.get('/api/rooms/getallrooms')).data;

            console.log('data dsdfcdfds :',data.rooms);

            setRooms(data.rooms);
            setLoading(false);

        } catch (error) {

            setError(true);
            console.log(error);
            setLoading(false);
        }
    }

    const filterByDate = (dates) => {

        setFromDate(moment(dates[0]).format('DD-MM-YYYY'));
        setToDate(moment(dates[1]).format('DD-MM-YYYY'));
    }

    return (
        <div className='container mt-md-5 mb-md-5'>

            <div className='row'>

                <div className='col-md-4'>

                <RangePicker
                format='DD-MM-YYYY'
                onChange={filterByDate} />

                </div>

                <div className='col-md-4'>

                </div>

                <div className='col-md-4'>

                </div>

            </div>

            <div className='row justify-content-center'>

                {loading ? (
                    <Loader />
                ) : rooms.length > 1 ? (
                    rooms.map((room, index) => {
                        return <div className='col-md-9' key={index}>
                            <Room room={room} fromdate={fromdate} todate={todate} />
                        </div>;
                    })
                ) : (
                    <Error />
                )}

            </div>
        </div>
    );
}

export default Home;