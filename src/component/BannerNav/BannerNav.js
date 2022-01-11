import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
/*import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
import icon5 from '../../images/icon5.png';
import icon6 from '../../images/icon6.png';
import icon7 from '../../images/icon7.png';
import icon8 from '../../images/icon8.png';*/
const bannerMenu = [
    { id: 1, name: 'Book List', icon: "https://i.ibb.co/tDVxjFL/icon1.png", backgroundColor: '#F2D6B9' },
    { id: 2, name: 'Routine', icon: "https://i.ibb.co/CJMFrfs/icon2.png", backgroundColor: '#C6D8DD' },
    { id: 3, name: 'Member List', icon: "https://i.ibb.co/QMt9PfK/icon3.png", backgroundColor: '#F5F2FD' },
    { id: 4, name: 'Mentor', icon: "https://i.ibb.co/X2ZDQ75/icon4.png", backgroundColor: '#F8E8E8' },
    { id: 5, name: 'Meeting', icon: "https://i.ibb.co/Kzq5NtF/icon5.png", backgroundColor: '#F4FFDC' },
    { id: 6, name: 'Class Test', icon: "https://i.ibb.co/P5ZkjRF/icon6.png", backgroundColor: '#FBF2EF' },
    { id: 7, name: 'Attendence', icon: "https://i.ibb.co/CPSx3hb/icon7.png", backgroundColor: '#FBFBFB', active: 'active' },
    { id: 8, name: 'Member Review', icon: "https://i.ibb.co/XChDrPw/icon8.png", backgroundColor: '#FBF4EC' },
]
const BannerNav = () => {
    return (
        <Container>
            <Row className='pt-4'>
                <Col sm={2} md={5}>
                    <Button variant='light'><i className="fas fa-long-arrow-alt-left"></i></Button>
                </Col>
                <Col sm={10} md={7}>
                    <h2 className='mb-4'>Rasel Academy</h2>
                </Col>
            </Row>
            <Row>
                {
                    bannerMenu.map(menu => <Col key={menu.id} xs={12} sm={6} md={4} lg={3} className='mb-4'>
                        <Card className='menu-card text-center h-100 pt-4 border-0 shadow' style={{ backgroundColor: `${menu?.backgroundColor}` }}>
                            <Card.Img src={menu.icon} />
                            <Card.Body className={`${menu?.active}`}>
                                <Card.Title>{menu.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default BannerNav;