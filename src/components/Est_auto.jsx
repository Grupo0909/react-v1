import React, { useState, useEffect } from 'react';

const Auto= ()=>{
    const [stado, setEstado] = useState(false)

    ///////////////////
     const [contar, setcontar] = useState(0)

    useEffect(()=>{
        console.log(contar);
    },[stado])
    //////////////////

    const encenderApagar = ()=>{
        setEstado(!stado)
        setcontar(contar +1)
    }


    return(
        <>
        <button onClick={encenderApagar}>Encende/Apagar</button>
        <p>el auto esta {stado ? 'encendido' : 'apagado'}</p>
        <h4>Clicks {contar}</h4>
        </>
    )
}

export default Auto;
