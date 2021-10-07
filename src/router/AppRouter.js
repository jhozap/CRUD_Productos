import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Login } from '../components/auth/Login';
import { Productos } from '../components/Productos/Productos';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/" component={ Productos } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
