import { useState } from "react"


export const useCounter = ( numero: number=7 ) => {
 
    const [valor, setValor] = useState(numero)

    const acumular = (numero: number) => {
        setValor( valor + numero )
    }

    return {
        valor , acumular
    }
}
