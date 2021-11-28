import React from 'react'
//import { useState } from 'react/cjs/react.development';
import Datos from './components/Datos_props';
import Auto from './components/Est_auto';
import {Contar} from './components/Est_count';
import Func from './components/Func_props';
import Obj, {Xt} from './components/Objeto_props';

const App = ()=>{
    //props por funciones
    const saludar =(nombre)=>{
        alert('Hola '+ nombre)
    }
    /////////////////////

    // props por objetos 
    const user={
        nombre: 'jose rojas',
        edad: 22,
        color: 'naranja'
    }
    ////////////////

    //props por variables
    const nombre = 'mariana'
    const edad = 1
    //////////////////////////7
    return(
        <>
            <Datos nombre={nombre} edad= {edad}/>
            <Obj info= {user}/>
            <Xt />
            <Func saludar = {saludar} info= {user}/>
            <br /><br />
            <Contar />
            <Auto />
        </>
    )
}

export default App; 