import React, { useEffect, useState } from 'react'
import MainNavbar from '../Landing/MainNavbar'
import axios from 'axios';

export default function UserDetauls() {

    const [useretails, setuseretails] = useState([]);

    useEffect(() => {
        userDetails();
    }, []);

    const userDetails = async () => {
        try {
            const token = sessionStorage.getItem("token");
            const userId = sessionStorage.getItem("userId");
            console.log(userId);
            const api = "http://localhost:9191/auth/userDetails/"+userId;
            axios.get(api, { headers: { "Authorization": 'Bearer ' + token } })
                .then(response_userId => {
                    setuseretails([response_userId.data]);
                    console.log(response_userId);
                    console.log(response_userId.data);
                }
                )
        }
        finally {

        }

    }

    return (
        <div>
            <div>
                <MainNavbar />
            </div>
            user Deatils
            <div>
                <table>
                    {
                        useretails.map(details => (

                            <tbody>
                                <tr>
                                    <td>user Id :</td>
                                    <td>{details.id}</td>
                                </tr>
                                <tr>
                                    <td>Username :</td>
                                    <td>{details.name}</td>
                                </tr>
                                <tr>
                                    <td>email :</td>
                                    <td>{details.email}</td>
                                </tr>

                            </tbody>
                        ))
                    }

                </table>
            </div>
        </div>
    )
}
