import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './AttendenceSheet.css';
import CheckBox from './CheckBox';

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

    return (
        <Container className='pb-3'>
            <Row>
                {/* date filed */}
                <div className='col-md-6 mb-3'>
                    {/* <p className='ms-2'>12/09/2021</p> */}
                    <div className='attendence-span ms-2'>
                        <input type="text" name="" className='rounded-start input-border' value="12/09/2021" id="" /> <span className='d-flex justify-content-center align-items-center'><i className="far fa-calendar-alt"></i></span>
                    </div>
                </div>
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
                attendenceData?.map(single => <CheckBox key={single.id} single={single}></CheckBox>

                )
            }
            <div className='text-end'>
                <Button variant='danger' className='me-3 px-3'>Done</Button>
                <Button variant='outline-danger' className='me-3 px-3'>Cancel</Button>
            </div>
        </Container>
    );
};

export default AttendenceSheet;