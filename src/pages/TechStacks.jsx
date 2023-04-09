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

    <div className="stackContainer">
        <img src="/img/jekyllrb.png" alt="jekyllrb" />
        <img src="/img/hugo.jpg" alt="hugo" />
        <img src="/img/gatsby.png" alt="gatsby" />
    </div>
</section>

<p>
    Static sites are usually very simple sites, that require minimal files, the content is not dynamic.
    They are ideal for small websites.
</p>

<h2>Dynamic site</h2>
    
    <section className='staticSection'>
        <div className='stackContainer'>
            <span>MERN</span>
            <img src="/img/mongodb.png" alt="mongodb" />
            <img src="/img/Expressjs.png" alt="express" />
            <img src="/img/react.png" alt="react" />
            <img src="/img/node.png" alt="node" />
        </div>

        <div className='stackContainer'>
            <span>MEAN</span>
            <img src="/img/mongodb.png" alt="mongodb" />
            <img src="/img/Expressjs.png" alt="express" />
            <img src="/img/angular.png" alt="angular" />
            <img src="/img/node.png" alt="node" />
        </div>

        <div className='stackContainer'>
            <span>LAMP</span>
            <img src="/img/apache.png" alt="apache" />
            <img src="/img/linux.jpg" alt="linux" />
            <img src="/img/mysql.png" alt="mysql" />
            <img src="/img/php.png" alt="php" />
        </div>

        <div className='stackContainer'>
            <span>Django</span>
            <img src="/img/python.png" alt="python" />
            <img src="/img/django.png" alt="django" />
            <img src="/img/apache.png" alt="apache" />
            <img src="/img/mysql.png" alt="mysql" />
        </div>

    </section>

</>
)
}