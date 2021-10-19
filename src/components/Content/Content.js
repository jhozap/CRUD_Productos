import React from 'react'
import { ContentRouter } from '../../router/ContentRouter'
import { Productos } from './Productos/Productos'

export const Content = () => {
    return (
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <Productos />
        </main>
    )
}
