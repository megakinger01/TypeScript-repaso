import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqResApi"
import { ReqRespAPI, Usuario } from "../interfaces/reqResp"


export const useGetUsusarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const paginaRef = useRef(1)

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async () => {

        try {
            const resp = await reqResApi.get<ReqRespAPI>('/users', {
                params: {
                    page: paginaRef.current
                }
            })

            if( resp.data.data.length > 0 ){
                setUsuarios(resp.data.data)
                
            } else {
                paginaRef.current --
                alert('No hay mas  registros')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const siguientes = () => {
        paginaRef.current ++
        cargarUsuarios()
    }
    
    const anteriores = () => {
        if (paginaRef.current > 1) {
            paginaRef.current --
            cargarUsuarios()
        }
    }

    return{
        usuarios , siguientes , anteriores 
    }
}
