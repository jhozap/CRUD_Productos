import React from 'react'
import { Navbar } from '../Nav/Navbar'

export const Productos = () => {
    return (
        <div>
            <Navbar />
            <div className="container login-container">


                <div className="row">
                    <div className="col-md-6 login-form-2">
                        <h3>Crear Produtos</h3>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Codigo de Barras"
                                />
                            </div>
                            <div class="form-group">
                                <label for="category">Categoria</label>
                                <select class="form-control" id="category">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <input
                                    type="submit"
                                    className="btn btn-success"
                                    value="Crear Producto" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
