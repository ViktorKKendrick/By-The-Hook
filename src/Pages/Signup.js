import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState} from "react";
import axios from "axios";

export default function SignUp() {
    const [data, setData] = useState({});
    // const [error, setError] = useState(null);


    const handleChange = e => setData(prevState => {
        console.log(e.target.id, e.target.value)

        return { ...prevState, [e.target.id]: e.target.value }
    });

    const handleSubmit = (e) => {
        e.preventDefault()
//POST data from input (I.E  => name, email, password)
        axios.post('https://aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/register', {
            name: data.firstName + ' ' + data.lastName,
            email: data.email,
            password: data.password,
        })
        .then(function(response){
            console.log(response)
            //Gets the token and saves it to local storage
            const token = response.data.data.token
                localStorage.setItem('token', token)
        })
        .catch(function (error) {
            console.log(error);
        })

    }



    return (
        <Container className='text-center'>
            <Row>
                <Col>
                    <h1>Sign Up</h1>
                </Col>
            </Row>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Col className='pt-5 text-center'>

                        <Form.Group onChange={handleChange} value={data.firstName= ""}>
                            <Form.Label>First Name  </Form.Label>
                            <Form.Control id='firstName' type="text" placeholder="John" />
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={data.lastName= ""}>
                            <Form.Label>Last Name  </Form.Label>
                            <Form.Control id='lastName' type="text" placeholder="Doe" />
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={data.email= ""}>
                            <Form.Label>E-Mail  </Form.Label>
                            <Form.Control id='email' type="text" placeholder="John.Doe@website.com" />
                        </Form.Group>

                        <Form.Group onChange={handleChange} value={data.password= ""}>
                            <Form.Label>Password  </Form.Label>
                            <Form.Control id='password' type="text" placeholder="password" />
                        </Form.Group>

                        <Button type='submit' className='btn btn-dark mt-3'>Sign Up</Button>
                    </Col>
                </Form>
            </Row>
        </Container>
    )
}