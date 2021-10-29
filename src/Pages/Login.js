import React from "react";
import axios from "axios";
import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
// import {Router, Route, Link } from "react-router-dom";
// import Dashboard from "./Dashboard";


export default function LoginPage(props) {

    const [login, setLogin] = useState({});

    const handleChange = e => setLogin(prevState => {

        return { ...prevState, [e.target.id]: e.target.value }
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('user logged in')
        console.log(login)
//https://port-3000-AincBootcampAPI-ianrios529550.preview.codeanywhere.com

        // axios call (/api/auth/login)
        axios.post('https://aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/login', {
            email: login.email,
            password: login.password,
            client_id: "94ba363d-e0ab-4649-86ce-4a4392cc00ad",
            client_secret: "mYebcUwE5S4FNff4pjK39vx3FtxCmZXz2Hy7XJHZ"
        })
            .then(function (response) {
                console.log(response);
                const token = response.data.data.token
//Saves the Token to localStrorage
                localStorage.setItem('token', token)

                console.log(token)
                
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (

        <Container>
            <Row>
                <Col className='text-center'>
                    <h1>Login</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group onChange={handleChange} value={login.loginEmail= ""}>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control id='email' type="text" placeholder="John.Doe@website.com" />
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={login.loginPassword= ""}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control id='password' type="text" placeholder="password" />
                        </Form.Group>
                        <Col className='d-flex justify-content-center'>
                            <Button to='/Dashboard' type='submit' className='btn btn-dark mt-3'>Login</Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}