/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './menu.css'

export const Menu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-4">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" className="nav-link active" href="#/">
                            <i className="fas fa-cart-arrow-down"> </i>
                             Productos
                        </a>
                    </li>                    
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Administracion</span>                    
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" className="nav-link active" href="#/">
                            <i className="fas fa-users"> </i>
                             Usuarios
                        </a>
                    </li>                                    
                </ul>
            </div>
        </nav>
    )
}

export default Menu
