import {React} from 'react';
import { Link } from 'react-router-dom';
import './rightContainer.css';

export default function RightContainer({links, text}){
    
    const renderData = links.map((element, index)=>{
        return <Link to={element.url} target='_blank' key={index}>
            {element.text}
        </Link>
    });

return(
<div className="containerRight">
    <div>
        {renderData}
    </div>
    <hr />
    <span>{text}</span>
</div>
)
}