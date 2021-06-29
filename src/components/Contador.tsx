import React from 'react'
import { useState } from 'react'

export const Contador = () => {

    const [valor, setValor] = useState(0)

    const acumular = (numero: number) => {
        setValor( valor + numero )
    }

    return (
        <div >
            <button className="btn btn-primary" onClick={()=> acumular(1)}>
                +1
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={()=> acumular(-1)}>
                -1
            </button>

            {valor}
            
        </div>
    )
}
