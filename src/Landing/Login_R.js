import React from 'react'
import MainNavbar from './MainNavbar'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login_R() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const [userErrors, setUserErrors] = useState({
        name: "",
        email: "",
        password: "",
    });

    let navigate = useNavigate();

    // State for success message
    const [successMessage, setSuccessMessage] = useState("");

    // State for error message
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit_R = async (e) => {
        try {

            const response = await axios.post("http://localhost:9191/auth/registor", user);
            if (response) {
                setMessage("Regisation Successfully");
            } else {
                setMessage("Failed");
            }
        }
        catch (error) {
            setErrorMessage("Error during registration. Please try again.");
            setSuccessMessage("");
        } finally {
            //alert("Registation Successfull")
            navigate("/login");
        }
    };

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div>
                <MainNavbar />
            </div>
            <div>
                <form >
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='name'
                        required={true}
                        value={user.name}
                        onChange={onInputChange}
                    /><br />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='password'
                        required={true}
                        value={user.password}
                        onChange={onInputChange}
                    /><br />
                    {/* <input
                        type='text'
                        name='id'
                        id='id'
                        placeholder='id'
                        required={true}
                        value={user.id}
                        onChange={onInputChange}
                    /><br /> */}
                    <button onClick={onSubmit_R}>
                        Registor
                    </button>
                    {
                        message && <div > {message}</div>
                    }
                </form>
            </div>
        </div>
    )
}
