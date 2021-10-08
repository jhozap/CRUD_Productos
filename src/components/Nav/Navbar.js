import React from 'react'
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark shadow sticky-top">
            <samp className="navbar-brand">
                Bienvenido <a className="nav-link active" href="#/">@Jhonny Zapata</a>
            </samp>

            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>
        </nav>
    )
}
