import React from 'react'

export const TiposBasicos = () => {

    const nombre: string = 'Pedro'
    const number: number = 33
    const estudios: string[] = ['electrónica', 'Desarrollo web']


    return (
        <>
           <h3>Tipos básicos</h3> 
           {number} , {nombre}, {estudios.join(', ')}
        </>
    )
}
