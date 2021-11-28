import React, { useState } from 'react';

export const Contar= ()=>{
    const [contar, setContar] = useState(0)

    return(
        <>
        <button onClick={()=> setContar(contar + 1)}>Clicks</button>
        <p>numero de clicks {contar}</p>
        </>
    )
}


