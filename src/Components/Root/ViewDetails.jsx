import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoaidngSpinner from "./LoaidngSpinner";

const ViewDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/items/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoaidngSpinner />;

  if (!item) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">
        Item not found
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl overflow-hidden">

        {/* Image Section */}
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 badge bg-orange-500 text-white border-none px-4 py-3">
            {item.condition}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {item.name}
          </h2>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="badge badge-outline border-orange-400 text-orange-500">
              {item.category}
            </span>
            <span className="badge badge-outline">
              Quantity: {item.quantity}
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
            <p>
              📍 <b>Pickup Location:</b> {item.pickup_location}
            </p>
          </div>

          <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none mt-6 w-full">
            Request This Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
