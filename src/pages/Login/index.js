import React, { useState } from 'react';
import api from '../../services/api';

export default function Login() {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await api.post('/register', {email})
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);
    }  
  
    return (
        <>
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos </strong> para sua start-up 
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail *</label>
            
            <input 
                id="email" 
                type="email" 
                placeholder="seu e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}/>

            <button type="submit" className="btn">Entrar</button>
            </form>       
        </>    
    )
}