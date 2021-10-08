import React from 'react';
import { useForm } from '../../hooks/useForm';

import { fetchSinToken } from '../../helpers/fech';
import './login.css';

export const Login = () => {

    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: 'prueba.correo@gmail.com',
        lPassword: '123456'

    });

    const { lEmail, lPassword } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(lEmail, lPassword)

        // startLogin(lEmail, lPassword);
    }



    const startLogin = (email, password) => {

        return async () => {
            console.log(email, password);

            // const resp = await fetchSinToken('auth', { email, password }, 'POST')
            // const body = await resp.json();

            // console.log('body', body);

        }

    }


    return (
        <div className="login">
            <div className="row">
                <div className="col-md-6 login-form-1 login-container">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
