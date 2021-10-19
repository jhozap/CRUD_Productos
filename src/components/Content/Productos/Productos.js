import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../content.css';
import CrearProducto from './Crear/CrearProducto';
import EditarProducto from './Editar/EditarProducto';
import ListarProductos from './Listar/ListarProductos';

export const Productos = () => {

    let { id } = useParams();

    console.log(id);

    return (
        <section className="content mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-primary card-outline">
                            <div className="card-header flex">
                                <h5 className="m-0">{id === 'list' ? 'Productos' : id === 'crear' ? 'Crear Producto' : 'Editar Producto'}</h5>
                                {
                                    id === 'list' ?
                                        <Link className="btn btn-primary mr-3" to={`/productos/crear`}>
                                            Crear Producto
                                        </Link>
                                        :
                                        <Link className="btn btn-danger mr-3" to={`/productos/list`}>
                                            Cancelar
                                        </Link>
                                }

                            </div>
                            <div className="card-body">
                                {id === 'list' ? <ListarProductos /> : (id === 'crear') ? <CrearProducto /> : <EditarProducto />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
