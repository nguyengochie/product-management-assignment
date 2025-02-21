import React, { useEffect, useState } from 'react';
import { GuestService } from '../service/GuestService';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
    const [dataGuest, setDataGuest] = useState([]);
    const [searchParams, setSearchParam] = useSearchParams();
    const currentPage = searchParams.get("page");

    const fetchGuest = async (currentPage) => {
        try {
            const resp = await GuestService.getListGuest({ limit: 2, page: currentPage });
            setDataGuest(resp);
        } catch (error) {
            console.error(error);
        }
    }

    const onClickPage = (pageindex) => {
        setSearchParam({ page: pageindex })
    }

    const renderGuest = () => {
        return dataGuest?.data?.map((guest) => {
            return <tr key={guest?._id}>
                <td>{guest?._id}</td>
                <td>{guest?.name}</td>
                <td>{guest?.description}</td>
                <td>{guest?.img
                    ? <img style={{ width: "100px", }} src={guest?.img} />
                    : "---"}</td>
            </tr>
        })
    }

    useEffect(() => {
        fetchGuest(currentPage);
    }, [currentPage])


    return (
        <div>
            <h1>Home</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {renderGuest()}
                </tbody>
            </table>
            <div style={{ display: "flex", gap: "4px", marginTop: "20px" }}>
                {Array.from({ length: dataGuest?.meta?.totalPages })?.map((p, index) => {
                    return <button onClick={() => onClickPage(index + 1)} key={index}>{index + 1}</button>
                })}
            </div>
        </div>
    )
}

export default HomePage