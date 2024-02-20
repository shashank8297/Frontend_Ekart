import React, { useState } from 'react'
import MainNavbar from './MainNavbar'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';


export default function Login_N() {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const [token, setToken] = useState("");

    const location = useLocation();

    let navigate = useNavigate();

    // State for success message
    const [successMessage, setSuccessMessage] = useState("");

    // State for error message
    const [errorMessage, setErrorMessage] = useState("");

    const [userErrors, setUserErrors] = useState({
        username: "",
        password: "",
    });

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onClick_l = async (e) => {
        try {
            console.log("1");
            const response_token = await axios.post("http://localhost:9191/auth/token", user);            
            setSuccessMessage("Registration successful");
            setUser({
                username: "",
                password: "",
            });
            console.log("2");
            console.log(response_token.data);
            if (response_token.data != null) {
                console.log("3");
                const response_validate = await axios.get("http://localhost:9191/auth/validate/" + response_token.data, token);
                setToken({
                    token: "",
                });
                console.log("4");
                console.log(response_validate.data);
                console.log(response_validate.data === "token validate");
                if (response_validate.data === "token validate") {
                    console.log("4-5");
                    sessionStorage.setItem("token",response_token.data);
                    console.log("5");
                    const response_userId = await axios.post("http://localhost:9191/auth/findId", user);
                    console.log(response_userId);
                    sessionStorage.setItem("userId",response_userId.data);
                    console.log("6");
                    navigate("/home");

                }
            }
            setUserErrors({});
            setErrorMessage("");
        }
        catch (error) {
            setErrorMessage("Error during registration. Please try again.");

            // Clear success message
            setSuccessMessage("");
        }
        finally {
            console.log("login");
        }
    };

    return (
        <div>
            <div>
                <MainNavbar />
            </div>
            login
            <div>
                <form>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        placeholder='username'
                        required={true}
                        value={user.username}
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
                    <input
                        type='button'
                        name='login'
                        id='login'
                        value='Login'
                        onClick={onClick_l}
                    />
                </form>
            </div>
            {/* <Home onClick={onClick_l} token={token} /> */}
        </div>
    )
}
