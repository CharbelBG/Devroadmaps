import React, { lazy, Suspense } from 'react';
import {Routes, Route, Link, } from 'react-router-dom';
const Home = lazy(()=> import('./pages/Home'));
const Navigation = lazy(()=> import('./components/layout/Navigation'));
const FrontEnd = lazy(()=> import('./pages/FrontEnd'));

export default function App(){

return(
    <>
    <Navigation />
    <Suspense>

    <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/frontend' element={<FrontEnd/>} /> 



        <Route path='*' element={<>Redirecting</>} /> 
     
    </Routes>
    </Suspense>

    <div className='footer'>
        <hr/>
        <Link to='https://github.com/CharbelBG' target={'_blank'} >Created by Charbel Bou Ghazalé</Link>
    </div> 
</>
)
}