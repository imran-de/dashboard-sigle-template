import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import RadioButton from './RadioButton';

const CheckBox = () => {

    const [count, setCount] = useState(250);
    const [isActive, setActive] = useState(false);
    const handleSelect = event => {
        setActive(!isActive);
    }
    const handleIncrease = event => {
        const newCount = count + 1;
        setCount(newCount);
        event.preventDefault();
    }

    const handleDecrease = event => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            event.preventDefault();
        }
    }
    return (
        <Row className='my-3'>
            <Col sm={2}>
                <div className='d-flex shadow p-1 rounded'>
                    <div className='att-profile-image-container'>
                        <img src="https://namesdir.com/img/Masud-3.png" alt="" />
                        <i className="far fa-play-circle"></i>
                    </div>
                    <div className='name-container ps-2'>
                        <h3>Masud Reja</h3>
                        <span>ID: Dp435783</span>
                    </div>
                </div>
            </Col>
            <Col sm={8}>
                <div className='shadow d-flex justify-content-between align-items-center rounded mx-auto p-2' style={{ width: '80%' }}>
                    <div className='w-25'>
                        <RadioButton />
                    </div>
                    <div className={`w-75 ${isActive ? null : 'disabled-button'}`}>
                        <div className='me-2 my-2 d-flex justify-content-between'>
                            <div>
                                <input className='me-2' type="checkbox" name="" id="" onClick={handleSelect} /> <span className='fine'>Fine</span>
                            </div>
                            <div className='per-fine rounded ms-2'>
                                <div className='fee-counter d-flex justify-content-center align-items-center'><span>{count}</span> ৳</div>
                                <div className='upDown-arrow d-flex justify-content-center align-items-center'>
                                    <i className="fas fa-chevron-up up-arrow" onClick={handleIncrease}></i>
                                    <hr />
                                    <i className="fas fa-chevron-down down-arrow" onClick={handleDecrease}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col sm={2}>
                <div className='d-flex justify-content-evenly shadow p-1 rounded py-3'>
                    <div>
                        Fine
                    </div>
                    <div>
                        400৳
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default CheckBox;