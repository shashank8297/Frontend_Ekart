import React, { useState } from 'react'
import MainNavbar from '../Landing/MainNavbar'
import axios from 'axios';

export default function AddProduct() {

    const [addProduct, setAddProduct] = useState({
        productId: "",
        productName: "",
        productDec: "",
        productPrice: "",
    })

    const onInputChange = (e) => {
        setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
    };

    const [message, setMessage] = useState("");

    const addProducts = async (e) => {
        try {
            const api = "http://localhost:9191/product/addProduct";
            const token = sessionStorage.getItem("token");
            axios.post(api, addProduct, { headers: { "Authorization": 'Bearer ' + token } })
                .then(response_add_product => {
                    console.log(response_add_product);
                    if (response_add_product) {
                        setMessage("Product added Successfully");
                    } else {
                        setMessage("Failed");
                    }
                })

        }
        finally {

        }

    };

    return (
        <div>
            <div>
                <MainNavbar />
            </div>
            <div>
                Add Product
            </div>
            <form>
                <input
                    type='text'
                    name='productId'
                    id='productId'
                    placeholder='productId'
                    required={true}
                    value={addProduct.productId}
                    onChange={onInputChange}
                /><br /><br></br>
                <input
                    type='text'
                    name='productName'
                    id='productName'
                    placeholder='productName'
                    required={true}
                    value={addProduct.productName}
                    onChange={onInputChange}
                /><br /><br />
                <input
                    type='text'
                    name='productDec'
                    id='productDec'
                    placeholder='productDec'
                    required={true}
                    value={addProduct.productDec}
                    onChange={onInputChange}
                /><br /><br />
                <input
                    type='text'
                    name='productPrice'
                    id='productPrice'
                    placeholder='productPrice'
                    required={true}
                    value={addProduct.productPrice}
                    onChange={onInputChange}
                /><br /><br />
                {
                    message && <div > {message}</div>
                }
                <input
                    type='button'
                    name='addproduct'
                    id='addproduct'
                    value='add product'
                    onClick={addProducts}
                />
            </form>
        </div>
    )
}
