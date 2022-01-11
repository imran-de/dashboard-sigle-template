import React from 'react';
import { Container } from 'react-bootstrap';
import AttendenceSheet from '../component/AttendenceSheet/AttendenceSheet';
import BannerNav from '../component/BannerNav/BannerNav';

const PageLayout = () => {
    return (
        <Container className='rounded-3 shadow my-4' style={{ backgroundColor: '#fff' }}>
            <BannerNav />
            <AttendenceSheet />
        </Container>
    );
};

export default PageLayout;