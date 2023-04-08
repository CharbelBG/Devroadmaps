import React from 'react';
import { useNavigate } from 'react-router';
import './navigation.css';

export default function Navigation(){

    const nav = useNavigate();

return(

<div className='navigationBar'>

    <span onClick={()=>nav('/')}>Home</span>
    <span onClick={()=>nav('/techstacks')}>Tech Stacks</span>

</div>
)
}