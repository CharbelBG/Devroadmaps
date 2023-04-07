import React from 'react';
import './home.css';
import { useNavigate } from 'react-router';

export default function Home(){

    const nav = useNavigate();

return(
<div className='home'>
    <h1>It's all about the mindset</h1>
    
    <p>
        Embracing a <span>trial and error</span> mentality involves a willingness 
        to <span>work hard</span>, learn continuously and <span> persevere</span> through challenges.
    </p>

    <div className='homeRoadMaps'>
        <span onClick={()=>{nav('/frontend')}}>Frontend developer</span> 
        <span>Backend developer</span>    
        <span>Devops</span> 
    </div>


</div>
)
}