import React from 'react';
import './techStacks.css';

export default function TechStacks(){

return(
<>
  <h1>
       What are you trying to build?
  </h1>

<h2>Static Site</h2>
<section className='staticSection'>

    <div className='stackContainer'>
        <img src="/img/js.png" alt="js" />
        <img src="/img/css.png" alt="css" />
        <img src="/img/html.png" alt="html" />
    </div>

</section>
</>
)
}