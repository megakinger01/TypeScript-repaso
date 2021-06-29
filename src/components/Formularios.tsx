import React from 'react'
import { useForm } from '../hooks/useForm';

export const Formularios = () => {

 

    const { onchange , email , password, formulario  } = useForm({
        email:'test1@test.com',
        password:'123546'
    })

    return (
        <div>
            <h3>Formularios</h3>

            <input 
                type="text"
                className="form-control"
                value={ email }
                onChange={ (ev)=> onchange(ev.target.value , 'email' )}
                />
            <input 
                type="password"
                className="form-control"
                value={ password }
                onChange={ (ev)=> onchange(ev.target.value , 'password' )}
                />

            
                <code>
                    <pre>
                        {JSON.stringify( formulario , null , 3 ) }   
                    </pre>
                </code>
             
        </div>
    )
}
