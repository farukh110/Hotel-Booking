import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const user = JSON.parse(localStorage.getItem('currentUser'));

    const logout = () => {

        localStorage.removeItem('currentUser');
        window.location.href='/login';
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="!#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="!#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#"> Hotels </a>
                            </li>

                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}

                        <ul className="navbar-nav d-flex">

                            {user ? (<> <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    { user.name }
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                    <li><a className="dropdown-item" href="!#"> Bookings </a></li>
                                    <li><a className="dropdown-item" onClick={logout}> Logout </a></li>

                                </ul>
                            </div> </>) : (<>

                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'> Login </Link>
                                </li>

                                <li className="nav-item">

                                    <Link className="nav-link" to='/register'> Register </Link>

                                </li>


                            </>)}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;