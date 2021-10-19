/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css'

export const Menu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-4">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            exact
                            to="/login">
                            <i className="fas fa-cart-arrow-down"> </i>
                            login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/productos">
                            <i className="fas fa-cart-arrow-down"> </i>
                            Productos
                        </NavLink>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Administracion</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/usuarios">
                            <i className="fas fa-users"></i>
                            Usuarios
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
