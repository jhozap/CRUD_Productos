import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import CrearProducto from '../components/Content/Productos/Crear/CrearProducto';
import { Productos } from '../components/Content/Productos/Productos';
import { Usuarios } from '../components/Content/Usuarios/Usuarios';
import { Menu } from '../components/Menu/Menu';
import { Navbar } from '../components/Nav/Navbar';

export const ContentRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Menu />
                    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <Switch>
                            <Route exact path="/productos/:id" component={Productos} />
                            <Route exact path="/usuarios/" component={Usuarios} />

                            <Redirect to="/productos/list" />

                        </Switch>
                    </main>
                </div>
            </div>
        </>

    )
}