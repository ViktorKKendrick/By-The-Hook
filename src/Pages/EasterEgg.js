import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

export default function EasterEgg() {
    return (
        <div className='bg-warning'>
<Container className='text-center bg-warning mx-auto'>
                <Row className='bg-warning'>
                    <h1>It's Costume Day</h1>
                    <h4>Shame on everyone who didn't dress up</h4>
                </Row>
            </Container>

            <Row>
                <Col>
                    <Image src='./Img/h1.jpg' />
                    <Image src='./Img/h2.jpg' />
                    <Image src='./Img/h3.jpg' />
                    <Image src='./Img/h4.jpg' />
                    <Image src='./Img/h5.jpg' />
                    <Image src='./Img/h6.jpg' />
                    <Image src='./Img/h7.jpg' />
                    <Image src='./Img/h8.jpg' />
                </Col>
            </Row>
            

            <Row>

            </Row>
            <Row>

            </Row>
            <Row>

            </Row>
            <Row>

            </Row>
        </div>
    )
}
