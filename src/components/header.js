import * as React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

export default class Header extends React.Component {
    render() {
        return (
                <Navbar className="navbar-fixed-top" color="light" light expand="md">
                    <NavbarBrand to="/">People Interactive</NavbarBrand>
                </Navbar>
        );
    }
}