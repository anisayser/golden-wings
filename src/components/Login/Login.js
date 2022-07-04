import React from 'react';
import auth from '../../firebaseInit';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {useNavigate, useLocation} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const from = location?.state?.from?.pathname || '/';

    if (user) {
        navigate(from)
    }

    return (
        <section className='login mt-20'>
            <div className="container mx-auto">
                <div>
                    <div className='flex flex-col items-center w-1/3 mx-auto rounded-xl shadow-xl'>
                        <div className='flex justify-between w-full bg-[#162B32] text-white p-5 rounded-t-xl shadow-xl'>
                            <h1 className='text-2xl'>Login With Google</h1>
                        </div>
                        <div className='space-y-5 px-5 py-20'>
                            
                            <button onClick={()=>signInWithGoogle()} className='cursor-pointer flex items-center space-x-3 w-full p-3 bg-white hover:bg-[#162B32] hover:text-white transition-all ease-in rounded-full shadow-xl'><img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt=''/> <span>Continue With Google</span></button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Login;