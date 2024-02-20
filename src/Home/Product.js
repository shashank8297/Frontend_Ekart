import React, { useEffect, useState } from 'react'
import MainNavbar from '../Landing/MainNavbar'
import axios from 'axios';

export default function Product() {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        productListData();
    }, []);

    const productListData = async () => {
        console.log("1");
        const api = "http://localhost:9191/product/list";

        console.log("2");
        const token = sessionStorage.getItem("token");

        console.log("3");
        axios.get(api, { headers: { "Authorization": 'Bearer ' + token } })
            .then(response_product_list => {
                console.log("3-4");
                console.log(response_product_list);
                console.log(response_product_list.data);
                console.log(response_product_list.data.productId);
                setProductList(response_product_list.data);
            })
        console.log("4");
        //setProductList(response_product_list.data);
    }


    return (
        <div>
            <div>
                <MainNavbar />
            </div>
            product
            <div>
                <div>
                    <div>
                        <table border="5px" cellPadding={10}>
                            <tbody >
                                {
                                    productList.map(product => (
                                        <tr>
                                            <td>{product.productName}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.productDec}</td>
                                            <td>
                                                <button>Buy</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}
