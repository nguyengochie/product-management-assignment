import React from 'react';
import { PRODUCTS_DATA } from "../utils/const";
import { Link } from "react-router-dom";



const HomePage = () => {

    const renderProducts = () => {
        return PRODUCTS_DATA.map((prd) => {
            return <tr key={prd?.id}>
                <td><Link target='_blank' to={`/product/${prd?.id}`}> {prd?.id}</Link></td>
                <td>{prd?.name}</td>
                <td>{prd?.price}</td>
                <td>{prd?.quantity}</td>
            </tr>
        })
    }

    return (
        <div>
            <h1>Home</h1>
            <table border="1">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                {renderProducts()}
            </table>
        </div>
    )
}

export default HomePage