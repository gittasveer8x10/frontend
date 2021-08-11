import React from 'react';
import '../customised-css/HomeScreen.css';
import { Container, Row, Col, Card, Button, Form, } from 'react-bootstrap'
import { Header } from '../components/Header';
<link rel="stylesheet" href="../customised-css/HomeScreen.css" />


export const HomeScreen = () => {





    return (

        <>
            <Header />
            <div className="parent-container">
                <div
                    className="child-container"
                    style={{ backgroundColor: "black", width: "100%", height: "100vh" }}
                >
                    <Container >

                        <Card style={{ backgroundColor: "black", width: "50%", paddingTop: "15%", }}>
                            <Card.Body>
                                <Card.Title style={{ color: "grey", fontSize: "55px" }} >Welcome to Our Art Community</Card.Title>
                                <Card.Text style={{ color: "white", fontSize: "20px" }}>
                                    Our goal is to cherish and celebrate the artist and share the stories behind and connect them with people. You need to have a invite code to join us.
                                </Card.Text>
                                <Form>
                                    <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">

                                        <Form.Control classname="" type="email" placeholder="Do you have an invite code?" />
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form.Group>



                                </Form>
                            </Card.Body>
                        </Card>



                    </Container>
                </div>
            </div>
        </>
    )
}
