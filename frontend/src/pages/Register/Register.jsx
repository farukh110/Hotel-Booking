import React, { useState } from 'react';
import axios from 'axios';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Success from '../../components/Success';

const Register = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const register = async () => {

        if (password === confirmPassword) {

            const user = {
                name,
                email,
                password,
                confirmPassword
            }

            try {

                setLoading(true);
                const result = await axios.post('/api/users/register', user).data;
                setLoading(false);
                setSuccess(true);

                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');

            } catch (error) {

                console.log(error);
                setLoading(false);
                setError(true);
            }

        } else {

            alert("password not matched");
        }
    }

    return (
        <div className='container mt-md-5'>

            { loading && (<Loader />) }
            { error && (<Error />) }

            <div className='row justify-content-center'>

                <div className='col-md-5 shadow p-3'>

                { success && (<Success message='Registration success' />) }

                    <h3> Register Page </h3>

                    <input type="text" className='form-control mt-md-2' value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                    <input type="email" className='form-control mt-md-2' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                    <input type="password" className='form-control mt-md-2' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                    <input type="password" className='form-control mt-md-2' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password' />

                    <button className='btn btn-dark mt-md-2' onClick={register}> register </button>

                </div>

            </div>

        </div>
    )
}

export default Register;