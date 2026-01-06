import { image } from 'framer-motion/client';
import React from 'react';
import { Link } from 'react-router';

const ItemCard = ({ item }) => {

    /**
     * category
    : 
    "Other"
    condition
    : 
    "Fair"
    description
    : 
    "Traditional wicker basket with fabric lining. One hinge is slightly loose."
    image
    : 
    "https://images.unsplash.com/photo-1590650153855-d9e808231d41"
    name
    : 
    "Wicker Picnic Basket"
    pickup_location
    : 
    "Charleston, SC"
    quantity
    : 
    1
    _id
    : 
    "695025bb4e2ebbeb679ccc7e"
     */

    console.log(item);
    return (


        <div class="card w-full bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 border border-orange-100 group">

            <figure class="relative h-52 overflow-hidden">
                <img src={item?.image} />
                <div class="absolute top-3 right-3">
                    <div class="badge bg-orange-500 border-none text-white font-semibold p-3 shadow-md">{item.condition}</div>
                </div>
            </figure>

            <div class="card-body p-5">
                <div class="flex justify-between items-start">
                    <h2 class="card-title text-gray-800 text-xl font-bold mb-0">{item.name}</h2>
                    <div class="badge badge-outline border-orange-300 text-orange-600 text-xs">Furniture</div>
                </div>

                <div class="flex items-center gap-4 text-xs text-gray-500 my-2">
                    <span class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                        {item.pickup_location}
                    </span>
                    <span class="flex items-center gap-1">
                     {item.quantity}
                    </span>
                </div>

                <p class="text-gray-600 text-sm line-clamp-2 mt-2">
                    Large L-shaped brown leather sofa. Minor wear on the armrest, but still very comfortable and perfect for a new home.
                </p>

                <div class="card-actions justify-end mt-6">
                    <Link to={`/items/${item._id}`} class="btn bg-orange-500 hover:bg-orange-600 border-none text-white w-full group">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;