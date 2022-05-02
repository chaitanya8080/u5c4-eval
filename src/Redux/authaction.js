

export const LOGIN = "LOGIN";

export const LOGOUT = "LOGOUT";

const login = (token) => {

    return {
        type: LOGIN,
        payload: token
    }
}

const logout = () => {
    return{
        type:LOGOUT,
        payload:null
    }
}

export {login,logout} ;