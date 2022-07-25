import React from 'react';
import {BrowserRouter, Route, Routes as Rotas} from 'react-router-dom'

import Login from './pages/Login'
import Main from './pages/Main'

export default function Routes() {
    return (        
        <BrowserRouter>       
            <Rotas>
                <Route  path="/" element={<Login />} />
                <Route  path='/dev/:id' element={<Main />} />
            </Rotas> 
        </BrowserRouter>        
    );
}