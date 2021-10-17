import React from 'react';
import '../content.css';
import ListarProductos from './Listar/ListarProductos';

export const Productos = () => {
    return (
        <section className="content mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                                <h5 className="m-0">Productos</h5>
                            </div>
                            <div className="card-body">
                                <ListarProductos />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
