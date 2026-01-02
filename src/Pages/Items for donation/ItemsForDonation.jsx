import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoaidngSpinner from '../../Components/Root/LoaidngSpinner';
import ItemCard from '../../Components/Root/ItemCard';

const ItemsForDonation = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://share-circle-server.vercel.app/items')
            .then(res => {
                setData(res.data);
                setLoading(false)
            })
            .catch(err => {
                console.error("Error fetching items:", err);
            });
    }, []);
    if (loading) return <LoaidngSpinner />
    console.log(data);

    return (
        <div>
            <div class="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
               {data.map(item => <ItemCard item={item}/>)}
             </div>
        </div>
    );
};

export default ItemsForDonation;