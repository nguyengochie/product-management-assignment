import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { getDetailProduct } from '../utils/const';
import { useState } from 'react';

const DetailPage = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;
        const product = getDetailProduct(id);
        if (!product) navigate("/not-found");
        setProductDetail(product);
    }, [])

    return (
        <div>
            <h1>{id}</h1>
            <h1>{productDetail?.name}</h1>
            <h1>{productDetail?.price}</h1>
            <h1>{productDetail?.quantity}</h1>
        </div>
    )
}

export default DetailPage