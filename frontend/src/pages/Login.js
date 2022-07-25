import React, {useState} from "react";
import './login.css';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

import  Logo from '../assets/logo.svg'


export default function Login() {
    const [username, setUsername] = useState('');
    const history = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/dev',{
            username,
        });

        const {_id} = response.data

       history(`/dev/${_id}`);
    }

    return(
        <div className="login-container" >
            <form onSubmit={handleSubmit}>
                <img src={Logo} alt="Tindev"/>
                <input 
                    placeholder="Digite seu usuário do Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>            
        </div>
    );
}