import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../logo.svg';
import logo_text from '../logo_text.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    render (){
        const loginRegLink = (
            <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <Link to="/login" className="nav-link">
                    Login
                </Link>
            </li>
            <li className="nav-item ml-5">
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            </li>
        </ul>           
        )
        const userLink = (
            <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <Link to="/profile" className="nav-link">
                    User
                </Link>
            </li>
            <li className="nav-item ml-5">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                    Logout
                </a>
            </li>
        </ul>           
        )
      return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
                <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <Link to="/">
                <img src={logo_text} alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
                {localStorage.usertoken ? userLink : loginRegLink}
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
            </NavWrapper>
        );
    }
  }

const NavWrapper = styled.nav`
    background: var(--mainPink);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`
export default withRouter(Navbar)