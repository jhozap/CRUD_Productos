import React from 'react';
import AuthProvider from './Providers/AuthProvider';
import { AppRouter } from './router/AppRouter';

export const CrudApp = () => {
    return (
        <div>
            <AuthProvider>
                < AppRouter />
            </AuthProvider>
        </div>
    )
}
