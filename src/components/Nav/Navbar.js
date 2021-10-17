import React from 'react'
import useAuth from '../../hooks/useAuth';
import './navbar.css';

export const Navbar = () => {
    const auth = useAuth();

    return (
        <nav className="navbar navbar-dark bg-dark shadow sticky-top">
            <samp className="navbar-brand">
                Bienvenido <a className="nav-link active" href="#/">@Jhonny Zapata</a>
            </samp>

            <button className="btn btn-outline-danger" onClick={auth.logout}>
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>
        </nav>
    )
}
