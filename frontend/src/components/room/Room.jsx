import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Room = ({ room, fromdate, todate }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='row mt-md-3 mb-md-3 shadow pt-md-4 pb-md-4'>

                <div className='col-md-3'>

                    <img className='img-fluid' src={room.imageurls[0]} alt={room.name} />

                </div>

                <div className='col-md-6'>

                    <h2> Name: {room.name} </h2>
                    <p> Max Count: {room.maxcount} </p>
                    <p> Type: {room.type} </p>

                </div>

                <div className='col-md-3 d-flex align-self-end'>

                    <button className='btn btn-dark m-1' onClick={handleShow}> view details </button>

                    <Link to={`/book/${room._id}/${fromdate}/${todate}`} className='btn btn-dark m-1'> Book Now </Link>

                </div>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title> {room.name} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel>

                            {room.imageurls.map((url, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={url}
                                        alt={url}
                                    />
                                </Carousel.Item>
                            ))}

                        </Carousel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    )
}

export default Room;