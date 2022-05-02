


import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Login from './Login';
// /orders and /neworder are protected routes
export const ProtectedRoute = ({ children }) => {


    const isAuth = useSelector(store => store.authStore.isAuth);
     console.log(isAuth);
    if(isAuth){
        return children;
    }
    return <Navigate to={"/login"} />
};