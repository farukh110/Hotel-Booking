import axios from 'axios';
import React, { useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const login = async () => {

        const user = {
            email,
            password,
        }

        try {

            setLoading(true);
            const result = (await axios.post('/api/users/login', user)).data;
            setLoading(false);

            localStorage.setItem('currentUser', JSON.stringify(result));
            window.location.href='/';

        } catch (error) {

            console.log(error);
            setLoading(false);
            setError(false);

        }

        console.log(user);
    }

    return (
        <div className='container mt-md-5'>

            { loading && (<Loader />) }

            <div className='row justify-content-center'>

                { error && (<Error message='invalid username and password' />) }

                <div className='col-md-5 shadow p-3'>

                    <h3> Login Page </h3>

                    <input type="email" className='form-control mt-md-2' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                    <input type="password" className='form-control mt-md-2' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />

                    <button className='btn btn-dark mt-md-2' onClick={login}> login </button>

                </div>

            </div>

        </div>
    )
}

export default Login;