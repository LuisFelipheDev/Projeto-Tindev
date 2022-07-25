import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import  Logo from '../assets/logo.svg'
import  Like from '../assets/like.svg'
import  Dislike from '../assets/dislike.svg'
import api from '../services/api'

import './main.css'

export default function Main({match}){
    const { id } = useParams()
    const [users, setUsers] = useState([]);    
    useEffect(()=>{
        async function loadUsers() {
            const response = await api.get('/dev',{
                headers:{user:id}
            });
            
            setUsers(response.data);
        }

        loadUsers()
    },[id])

    async function handleLike(idLikes) {
        
        await api.post(`/dev/${idLikes}/likes`,null,{
            headers: {user:id}
        });

        setUsers(users.filter(user => user._id !== idLikes))


    }

    async function handleDislike(idDislikes) {        
        await api.post(`/dev/${idDislikes}/dislikes`,null,{
            headers: {user:id}
        });

        setUsers(users.filter(user => user._id !== idDislikes))

    }
    return( 
        <div className='main-container'>
            <Link to='/'>
                <img src={Logo} alt="Tindev"/>
            </Link>
           { users.length > 0 ?  
            (<ul>
                {users.map(user =>
                <li key={user._id}>
                    <img src={user.avatar} alt={user.name} />
                    <footer>
                        <strong>{user.name}</strong>
                        <p>{user.bio}</p>
                    </footer>
                    <div className='buttons'>                        
                        <button type='button' onClick={() => handleDislike(user._id)}>
                            <img src={Dislike} alt='Dislike' />
                        </button>
                        <button type='button' onClick={() => handleLike(user._id)}>
                            <img src={Like} alt='Like' />
                        </button>                    
                    </div>
                </li>                
                )}   
            </ul>)
            :
            (
                <div className='empty'>
                    Acabou :(
                </div>
            )
        }
        </div>
    )
}