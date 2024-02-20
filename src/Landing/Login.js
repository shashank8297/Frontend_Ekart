import React from 'react'
import MainNavbar from './MainNavbar'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    let navigate = useNavigate();

    const onsubmit_login = async (e) => {
        navigate("/Login_N");
    };
    const onsubmit_registor = async (e) =>{
        navigate("/Login_R");
    };

    return (
        <div>
            <div>
                <MainNavbar />
            </div>
            <div>
                fchlj;k
                <form onSubmit={onsubmit_login}>
                    <button
                        type='submit'
                        name="login_n"
                        id="login_n"
                        className='login_n'
                    >
                        Login
                    </button>
                </form>
                <form onSubmit={onsubmit_registor}>
                    <button
                        type='submit'
                        name="login_r"
                        id="login_r"
                        className='login_r'
                    >
                        registor
                    </button>
                </form>
            </div>
        </div>
    )
}
