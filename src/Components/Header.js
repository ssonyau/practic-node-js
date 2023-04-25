import React, { Component } from 'react'
import { Container, FormControl, Navbar, Form, Button, Nav } from 'react-bootstrap'
import Logo from './logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Contacts from '../Pages/Contacts'
import About from '../Pages/About'
import Blog from '../Pages/Blog'


export default class Header extends Component {
    render() {
        return (
        <>
        <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        src={Logo}
                        height='30'
                        width='30'
                        className="d-inline-block align-top"
                        alt='Logo'
                    /> React Site
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="mr-auto">
                        <Nav.Link href="./"> Home </Nav.Link>
                        <Nav.Link href="./about"> About us </Nav.Link>
                        <Nav.Link href="./contacts"> Contacts </Nav.Link>
                        <Nav.Link href="./blog"> Blog </Nav.Link>
                    </Nav>
                    <Form inline >
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-info"> Search </Button>
                    </Form>
                    </Navbar.Collapse>
            </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/about" element={<About/>} />
                        <Route exact path="/contacts" element={<Contacts/>} />
                        <Route exact path="/blog" element={<Blog/>} />
                    </Routes>
                </Router>
                </>
    )
    }
}
