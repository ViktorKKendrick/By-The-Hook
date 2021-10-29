import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Dash(props) {

    const [data, setData] = useState({});

    useEffect(() => {

        axios({

        })

            .then(function (response) {

            })
            .catch(function (error) {

                console.log(error);
            })
            .then(function () {

            });

    })

    return (
        <>
            <Container className='text-center mx-auto'>
                <Row>
                    <Col>
                        <h2>Dashboard</h2>
                    </Col>
                </Row>
            </Container>
            <Container className='text-center mx-auto bg-light'>
                <Row>
                    <Col className='col col-3'>
                        <p>Account Information</p>
                        {/* <Container className='text-center'> */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./Img/download.jpg" />
                            <Card.Body>
                                <Card.Title>Account</Card.Title>
                                <Card.Text>
                                    Name: {data.name}
                                </Card.Text>
                                <Card.Text>
                                    Email: {data.email}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* </Container> */}
                    </Col>
                    <Col className='col col-9'>
                        <Row>
                            <p>Change Password</p>
                        </Row>
                        <Container>
                            Hello
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}