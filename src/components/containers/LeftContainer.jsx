import React from 'react';
import { Link } from 'react-router-dom';
import './leftContainer.css';

export default function LeftContainer({links, text}){

    const renderData = links.map((element, index)=>{
        return <Link to={element.url} target='_blank' key={index}>
            {element.text}
        </Link>
    });
return(
    <div className="containerLeft">
    <div>
        {renderData}
    </div>
    <hr />
    {text === '' ? <span className='noText'></span> :<span>{text}</span> }
 </div> 
)
}