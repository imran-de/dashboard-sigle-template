import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Container, FormControl, InputGroup, Row, ToggleButton } from 'react-bootstrap';
import './AttendenceSheet.css';

const attendenceData = [
    { id: 1, name: 'Masud Reja', idvalue: 'Dp435783' },
    { id: 2, name: 'Masud Reja', idvalue: 'Dp435783' },
    { id: 3, name: 'Masud Reja', idvalue: 'Dp435783' },
    { id: 4, name: 'Masud Reja', idvalue: 'Dp435783' },
    { id: 5, name: 'Masud Reja', idvalue: 'Dp435783' },
    { id: 6, name: 'Masud Reja', idvalue: 'Dp435783' },
    { id: 7, name: 'Masud Reja', idvalue: 'Dp435783' },
    { id: 8, name: 'Masud Reja', idvalue: 'Dp435783' },
]

const AttendenceSheet = () => {
    const [radioValue, setRadioValue] = useState(false);

    const radios = [
        { name: 'P', value: '1' },
        { name: 'A', value: '2' },
        { name: 'L', value: '3' },
    ];
    return (
        <Container className='pb-3'>
            <Row>
                {/* date filed */}
                <InputGroup className="mb-3 w-25" >
                    <FormControl className='dateinput' style={{ border: '1px solid red', borderRadius: "5px" }}
                        type='date'
                        value='12/09/2021'
                    />
                </InputGroup>
            </Row>
            {/* list header */}
            <Row className='attendence-header'>
                <Col sm={2} className='border-end'>
                    <h2>Name</h2>
                </Col>
                <Col sm={8}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2>
                            <i className="fas fa-clock"></i> <span>Attendence Time 12.45PM</span>
                        </h2>
                        <h2 className='d-flex flex-column justify-content-evenly align-items-center'>
                            <span className=''>English</span>
                            <span className='record'>Attendence recording</span>
                        </h2>
                        <h2 className='pt-3'>0/50</h2>
                    </div>
                </Col>
                <Col sm={2} className='border-start'>
                    <h2>Sat, 12Th Sep 2021</h2>
                </Col>
            </Row>
            {/* list value individuals */}
            {
                attendenceData?.map(single => <Row key={single.id} className='my-3'>
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
                            <div>
                                <ButtonGroup>
                                    {radios.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                            className='rounded-circle mx-1'
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </div>
                            <div>
                                <input type="checkbox" name='fine' /> <label className='ms-md-5'>Fine</label>
                            </div>
                            <div>
                                <input className='py-1' type="number" placeholder='250৳' style={{ border: '1px solid red', borderRadius: '5px' }} />
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

                )
            }
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
                        <div>
                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        className='rounded-circle mx-1'
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                        <div>
                            <input type="checkbox" name='fine' /> <label className='ms-md-5'>Fine</label>
                        </div>
                        <div>
                            <input className='py-1' type="number" placeholder='250৳' style={{ border: '1px solid red', borderRadius: '5px' }} />
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
            <div className='text-end'>
                <Button variant='danger' className='me-3 px-3'>Done</Button>
                <Button variant='outline-danger' className='me-3 px-3'>Cancel</Button>
            </div>
        </Container>
    );
};

export default AttendenceSheet;