import React, { useEffect, useState } from 'react';
import notie from 'notie';
import Swal from 'sweetalert2';
import 'notie/dist/notie.css';
import useAuth from '../../../../hooks/useAuth';
import { listarProductos } from '../../../../services/Productos.service';
import { Link } from 'react-router-dom';

const ListarProductos = () => {

    const auth = useAuth();

    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        try {
            const { data } = await listarProductos(auth.token);
            setProductos(data.productos);

        } catch ({response: error}) {

            console.log(error);
            if(error.status === 401) {
                setTimeout(() => {
                    auth.logout();
                }, 3000);
                notie.alert({ text: error.data.msg, type: 'warning', time: 3 });
            } else {
                notie.alert({ text: error.data.msg, type: 'error', time: 3 });
            }
            

        }
    }

    const handleDelete = ( id ) => {

        console.log('id', id);

        Swal.fire({
            title: 'Eliminar Producto',
            text: "¿Esta seguro que desea eliminar el prooducto?",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {

            console.log(result);

            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    useEffect(() => {
        getProductos();
    }, []);

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Codigo de Barras</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((producto, index) => (
                        <tr key={producto._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{producto.name}</td>
                            <td>{producto.bar_code}</td>
                            <td>{producto.category.name}</td>
                            <td>
                                <Link className="btn btn-primary mr-3" to={`/productos/${producto._id}`}>
                                    Editar
                                </Link>                                
                                <button type="button" className="btn btn btn-danger mr-3"  data="data de pruebas" onClick={ () => handleDelete(producto._id) }>Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    )
}

export default ListarProductos
