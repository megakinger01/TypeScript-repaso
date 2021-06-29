import React from 'react'
import { Usuario } from '../interfaces/reqResp';
import { useGetUsusarios } from '../hooks/useGetUsusarios';


export const Usuarios = () => {

    const{usuarios ,  siguientes , anteriores  } = useGetUsusarios()


    const renderItem = ({ id, avatar, first_name, last_name, email }: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img
                        src={avatar}
                        alt={first_name}
                        style={{ width: 80, borderRadius: 100 }}
                    />
                </td>
                <td>{first_name},{last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <div>
            <h3>Usuarios</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>avatar</th>
                        <th>Name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>

            <button className="btn btn-primary" onClick={ anteriores  }>
                anteriores 
            </button>
                    &nbsp;
            <button className="btn btn-primary" onClick={ siguientes }>
                Siguiente
            </button>
        </div>
    )
}
