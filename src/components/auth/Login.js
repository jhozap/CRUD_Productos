import React from 'react';
import { useForm } from '../../hooks/useForm';
import './login.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';
import notie from 'notie';
import 'notie/dist/notie.css';
import { loginGoogle } from '../../services/Auth.service';

export const Login = () => {
    // const history = useHistory();
    const auth = useAuth();

    // const [formLoginValues, handleLoginInputChange] = useForm({
    //     lEmail: '',
    //     lPassword: ''
    // });

    // const { lEmail, lPassword } = formLoginValues;

    // const handleLogin = (e) => {
    //     e.preventDefault();

    //     auth.setToken('abc123');
    //     auth.setUser({ id: 1, username: 'Jhonny' });
    //     history.push('/productos');

    // }

    const responseGoogle = async (resp) => {

        try {
            const { status, data } = await axios({
                method: 'POST',
                url: `${process.env.React_App_API_Url}/auth/google/login`,
                headers: {
                    'Authorization': `Bearer ${resp.tokenId}`
                }
            });

            console.log('status', status);

            if (status === 200) {

                auth.setToken(data.token);
                auth.setUser({ uid: data.uid, name: data.name });

            } else if (status === 201) {
                notie.alert({ text: data.msg, type: 'success', time: 10 });
            }

        } catch (error) {
            //    console.log(error);
            // console.log(error.toJSON());
            // console.log(error.response.status);
            // console.log(error.response.data);
            // <Notificacion type={'error'} text={'No autorizado'}/>


            if (error.response.status === 401) {
                notie.alert({ text: error.response.data.msg, type: 'warning', time: 10 });
            } else {
                notie.alert({ text: error.response.data.msg, type: 'error', time: 10 });
            }

        }

    }

    // const googleSignin = async (resp) => {
    //     try {
    //         const { status, data } = await loginGoogle(resp);

    //         console.log(status, data);
    //         if (status === 200) {

    //             auth.setToken(data.token);
    //             auth.setUser({ uid: data.uid, name: data.name });

    //         } else if (status === 201) {
    //             notie.alert({ text: data.msg, type: 'success', time: 10 });
    //         }
    //     } catch (error) {

    //         // console.log(error.error);

    //         if (error.response.status === 401) {
    //             notie.alert({ text: error.response.data.msg, type: 'warning', time: 10 });
    //         } else {
    //             notie.alert({ text: error.response.data.msg, type: 'error', time: 10 });
    //         }
    //     }
    // }


    return (
        <div className="login">
            <div className="row">
                <div className="col-md-6 login-form-1 login-container">
                    <h3>Ingreso</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                        {/* <div>
                            <button onClick={handleLogin}>Prueba login</button>
                        </div> */}
                        <GoogleLogin
                            className="btn form-group"
                            clientId="407857674330-otcplnqid00dearn7c0kclqn65n2k45a.apps.googleusercontent.com"
                            buttonText="Iniciar sesion con google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        {/* {!result.ok ? <p> {result.msg} </p> : <p></p>} */}
                    </form>
                </div>
            </div>
        </div>

    )
}
