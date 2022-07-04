import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseInit';
import {Navigate, useLocation} from 'react-router-dom';
import spinner from '../../images/Eclipse-1s-200px.svg';

const PrivateRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth)
    const location = useLocation();

    if (loading) {
        return <img className='mx-auto mt-32' src={spinner} alt="" />
    }

    if (!user) {
        return <Navigate to='/login' state={{from: location}}></Navigate>
    }

    return children;
};

export default PrivateRoute;