


export const LOGIN  = "LOGIN";
export const LOGOUT = 'LOGUT';


const login = (user) => {
    return {
        type:LOGIN,
        payload:user
    }
}

const logout = () => {
    return {
        type:LOGOUT
    }
}

export {login,logout};