import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'
import { withRouter } from 'react-router-dom'
import { NavLink as RouterNavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                 <Navbar
                    collapseOnSelect
                    bg="dark"
                    variant="dark"
                    expand="lg">
                    <Navbar.Brand>Lyft5 Motion Prediction for Autonomous Vehicles</Navbar.Brand>
                    <t/>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mr-auto nav-section' activeKey='7'>
                            <Nav.Link
                                eventKey='0'
                                as={RouterNavLink}
                                to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link
                                eventKey='1'
                                as={RouterNavLink}
                                to="/resnet-gru">
                                Resnet-GRU
                            </Nav.Link>
                            <Nav.Link
                                eventKey='2'
                                as={RouterNavLink}
                                to="/lstm">
                                LSTM
                            </Nav.Link>
                            <Nav.Link
                                eventKey='3'
                                as={RouterNavLink}
                                to="/seq2seq">
                                Seq2Seq
                            </Nav.Link>
                            <Nav.Link
                                eventKey='4'
                                as={RouterNavLink}
                                to="/vae-lstm">
                                VAE+LSTM
                            </Nav.Link>
                            <Nav.Link
                                eventKey='5'
                                as={RouterNavLink}
                                to="/seq2seqGAN">
                                Seq2SeqGAN
                            </Nav.Link>
                            <Nav.Link
                                eventKey='6'
                                as={RouterNavLink}
                                to="/s-lstm">
                                Social LSTM
                            </Nav.Link>
                        </Nav>
                        <Navbar.Brand>Deep New World</Navbar.Brand>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default withRouter(Header)