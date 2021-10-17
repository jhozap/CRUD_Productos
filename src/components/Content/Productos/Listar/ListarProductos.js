import React, { useEffect, useState } from 'react';
import notie from 'notie';
import 'notie/dist/notie.css';
import useAuth from '../../../../hooks/useAuth';
import { listarProductos } from '../../../../services/Productos.service';

const ListarProductos = () => {

    const auth = useAuth();

    useEffect(() => {
        getPRoductos();
    }, []);

    const [productos, setproductos] = useState([])

    const getPRoductos = async () => {
        try {
            const { data } = await listarProductos(auth.token);

            console.log(data);

            setproductos(data.productos);

        } catch (error) {
            if (error.response.status === 401) {
                notie.alert({ text: error.response.data.msg, type: 'warning', time: 3 });
            } else {
                notie.alert({ text: error.response.data.msg, type: 'error', time: 3 });
            }
        }
    }

    // getPRoductos();

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Codigo de Barras</th>
                    <th scope="col">Categoria</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((producto, index) => (
                        <tr key={producto._id}>
                            <th scope="row">{ index + 1 }</th>
                            <td>{producto.name}</td>
                            <td>{producto.bar_code}</td>
                            <td>{producto.category.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    )
}

export default ListarProductos
