import React from 'react'

export const Funciones = () => {

    const sumar = (a:number , b:number ):number => {
        return a + b 
    }
    return (
        <>
            <span>El resultado de la función es { sumar(10 , 3) }</span>
        </>
    )
}
