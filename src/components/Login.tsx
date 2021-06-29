import React,{useEffect , useReducer} from 'react'

interface AuthState  {
    verificando: boolean;
    token: null | string;
    nombre: string;
    username:string
}


const initialState:AuthState = {
    verificando : true,
    token: null ,
    nombre:'',
    username:''
}

type LoginPayload= {
    nombre: string
    username:string,
}   

type AuthAction = 
    | { type:'logout' }
    | { type:'login', payload:LoginPayload }

export const authReducer = ( state:AuthState , action:AuthAction ):AuthState => {

    switch ( action.type ) {
        case 'logout':
            return {
                nombre:'',
                token:null,
                verificando:false,
                username:''
            }
        
        case 'login':
           const {username , nombre } = action.payload
            return {
                verificando: false,
                token:'123ABC',
                username,
                nombre
            }

        default:
           return state
    } 
}




export const Login = () => {

    const [{ verificando, nombre, token }, dispatch] = useReducer( authReducer, initialState )

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type:'logout' })
        }, 1500);
    }, [])


    if (verificando) {
        return (
            <div className="alert alert-info">
                Verificando....
            </div>
        )
    }

    const login = () => {
        dispatch({ type: "login", payload:{ nombre:'Pedro', username:'mega' } })
    }

    const logout = () => {
        dispatch({type:'logout'})
    }

    return (
        <>
            {
                (token)        
                    ?
                        <>
                            <div className="alert alert-success"> Autenticado como { nombre } </div>
                            <button 
                                className="btn btn-danger"
                                onClick={logout}
                                > Logout 
                            </button> 
                        </> 
                    
                    
                    : 
                        <>
                            <div className="alert alert-danger"> No autenticado </div>
                            <button 
                                className="btn btn-primary"
                                onClick={login}
                                > Login 
                            </button>
                        </>
                           
            }
        </>
    )
}
