import React from 'react'


export default function Obj(props){
    return(
        <>
            <p>
               hola {props.info.nombre} <br />
               tuedad es {props.info.edad} años <br />
               tu color favorito es {props.info.color}
            </p>
        </>
    )    
}

export function Xt(){
    return(
        <h1>soy otra funcion de un mismo componente</h1>
    )
}