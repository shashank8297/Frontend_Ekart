import React from 'react'
import MainNavbar from '../Landing/MainNavbar'
import { useState } from 'react';
import axios from 'axios';

export default function Order_details() {

    const onInputChange = (e) => {
        setorderDetailsId({ ...orderDetailsId, [e.target.name]: e.target.value });
    };

    const [orderDetailsId, setorderDetailsId] = useState({
        order_details_id: "",
    });

    const [orderDetails, setorderDetails] = useState([]);

    const onClick_orderDetails = async (e) => {
        try {
            //const response_order_details = await axios.post("http://localhost:9191/orderDetails/" + orderDetailsId.id, orderDetailsId);

            const api = "http://localhost:9191/orderDetails/orderDetails/" + orderDetailsId.order_details_id;
            const token = sessionStorage.getItem("token");
            console.log(token);
            axios.get(api, { headers: { "Authorization": 'Bearer ' + token } })
                .then(response_order_details => {
                    console.log(response_order_details.data);
                    console.log([response_order_details.data]);
                    setorderDetails([response_order_details.data]);
                })
            //console.log(response_order_details);
        }
        finally {

        }
    };

    return (
        <div>
            <div>
                <MainNavbar />
            </div>
            Order_details
            <div>
                <form>
                    <input
                        type='text'
                        name='order_details_id'
                        id='order_details_id'
                        placeholder='order details id'
                        required={true}
                        value={orderDetailsId.order_details_id}
                        onChange={onInputChange}
                    /><br />
                    <input
                        type='button'
                        name='details'
                        id='details'
                        value='details'
                        onClick={onClick_orderDetails}
                    />
                </form>

                <table style={{ alignContent: 'center' }}>
                    <tr>
                        <td style={{float:"left"}}>
                            orders Details
                            <table border="5px" cellPadding={10} >
                                <tr>
                                    <td >orders ID</td>
                                    <td>Customer Name</td>
                                    <td>Customer Email</td>
                                    <td>Customer Phone</td>
                                    <td>Customer Address</td>
                                    <td>order Amount</td>
                                </tr>
                                {
                                    orderDetails.map(orderdata => (
                                        <tr>
                                            <td>{orderdata.order.orderId}</td>
                                            <td>{orderdata.order.orderCustomerName}</td>
                                            <td>{orderdata.order.orderCustomerEmail}</td>
                                            <td>{orderdata.order.orderCustomerPhone}</td>
                                            <td>{orderdata.order.orderCustomerAddress}</td>
                                            <td>{orderdata.order.orderAmount}</td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Products Deatils
                            <table border="5px" cellPadding={10} >
                                <tr>
                                    <td>Product ID</td>
                                    <td>Product Name</td>
                                    <td>Product Amount</td>
                                    <td>Product Description</td>

                                </tr>
                                {
                                    orderDetails.map(orderdata => (
                                        <tr>
                                            <td>{orderdata.product.productId}</td>
                                            <td>{orderdata.product.productName}</td>
                                            <td>{orderdata.product.productPrice}</td>
                                            <td>{orderdata.product.productDec}</td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td>
                        User Deatils
                            <table border="5px" cellPadding={10} >
                                <tr>
                                    <td>user ID</td>
                                    <td>user First Name</td>
                                    <td>user Last Name</td>
                                    <td>user Email</td>

                                </tr>
                                {
                                    orderDetails.map(orderdata => (
                                        <tr>
                                            <td>{orderdata.user.userId}</td>
                                            <td>{orderdata.user.firstName}</td>
                                            <td>{orderdata.user.lastName}</td>
                                            <td>{orderdata.user.email}</td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </td>
                    </tr>


                </table>

            </div>
        </div>
    )
}
