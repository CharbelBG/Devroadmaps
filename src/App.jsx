import React, { lazy, Suspense } from 'react';
import {Routes, Route, Link, } from 'react-router-dom';
const Home = lazy(()=> import('./pages/Home'));
const Navigation = lazy(()=> import('./components/layout/Navigation'));
const FrontEnd = lazy(()=> import('./pages/FrontEnd'));
const BackEnd = lazy(()=> import('./pages/BackEnd'));
const TechStacks = lazy(()=> import('./pages/TechStacks'));

export default function App(){

return(
<>
<Navigation />
    <Suspense>

    <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/frontend' element={<FrontEnd/>} />
        <Route path='/backend' element={<BackEnd />} />
        <Route path='/techstacks' element={<TechStacks />} />

        <Route path='*' element={<>Page not Found -_-</>} /> 
     
    </Routes>
    </Suspense>

    <div className='footer'>
        <hr/>
        <Link to='https://github.com/CharbelBG' target={'_blank'} >Created by Charbel Bou Ghazalé</Link>
        {/* <Link to='https://www.instagram.com/theresa_abiaad/' target={'_blank'}>and Marie Therese Abi Aad</Link>   */}
    </div> 
</>
)
}