import React from 'react'


interface Persona {
    nombre:string;
    edad:number;
    direccion:Direccion
}

interface Direccion {
    pais:string;
    casaNo: number
}

export const ObjetosLiterales = () => {

    const persona:Persona ={
        nombre:'Pedro',
        edad:33,
        direccion:{
            pais:'Venezuela',
            casaNo:11
        }
    }
    return (
        <>
            <h4>Objetos Literales</h4>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 3)}
                </pre>
            </code>
        </>
    )
}
