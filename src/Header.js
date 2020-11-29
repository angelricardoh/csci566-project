import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'
import { withRouter } from 'react-router-dom'
import { NavLink as RouterNavLink } from 'react-router-dom';

let bookmarkButtonSize = "20px";

class Header extends Component {

    constructor(props) {
        super(props)

        // this.handleSwitchChange = this.handleSwitchChange.bind(this)
        // this.handleSearchChange = this.handleSearchChange.bind(this)
        // this.handleSectionChange = this.handleSectionChange.bind(this)
        // this.handleItemSelectChange = this.handleItemSelectChange.bind(this)
        // this.handleBookmarkClick = this.handleBookmarkClick.bind(this)
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            // if (!location.pathname.includes('search')) {
            //     this.setState({selectValue: null})
            // }

            // if (location.pathname.includes('detail')) {
            //     this.setState({section: 'detail'})
            // }
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    // handleSwitchChange(checked) {
    //     this.setState({ checked: checked })
    //     this.props.handleSwitchChange(checked)
    // }

    // handleSearchChange(value, { action }) {
    //     if (action === 'set-value') {
    //         const selectedSearch = this.ref.select.select.state.focusedOption.value
    //         let searchPath = "/search?source=" + this.props.source +
    //             "&search=" + selectedSearch
    //         this.props.history.push(searchPath)
    //         this.setState({section: 'search'})
    //     }
    // }

    // handleSectionChange() {
    //     this.setState({section: 'sections'})
    // }

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
                        <Nav className='mr-auto nav-section' activeKey='6'>
                            <Nav.Link
                                eventKey='0'
                                as={RouterNavLink}
                                to="/home"
                                onClick={this.handleSectionChange}>
                                Home
                            </Nav.Link>
                            <Nav.Link
                                eventKey='1'
                                as={RouterNavLink}
                                to="/resnet-gru"
                                onClick={this.handleSectionChange}>
                                Resnet-GRU
                            </Nav.Link>
                            <Nav.Link
                                eventKey='2'
                                as={RouterNavLink}
                                to="/lstm"
                                onClick={this.handleSectionChange}>
                                LSTM
                            </Nav.Link>
                            <Nav.Link
                                eventKey='3'
                                as={RouterNavLink}
                                to="/seq2seq"
                                onClick={this.handleSectionChange}>
                                Seq2Seq
                            </Nav.Link>
                            <Nav.Link
                                eventKey='4'
                                as={RouterNavLink}
                                to="/vae-lstm"
                                onClick={this.handleSectionChange}>
                                VAE+LSTM
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