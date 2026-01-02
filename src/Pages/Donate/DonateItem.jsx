import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { imageUpload } from "../../utils";
import useAuth from "../../hooks/useAuth";

const DonateItem = () => {
  const navigate = useNavigate();
  const { user } = useAuth();


  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const handleformSubmit = async (data) => {
    try {
      // 1️⃣ upload image to imgbb
      const imageFile = data.image[0];
      const imageUrl = await imageUpload(imageFile);

      // 2️⃣ prepare donation data
      const donationData = {
        itemName: data.itemName,
        category: data.category,
        condition: data.condition,
        location: data.location,
        quantity: Number(data.quantity),
        description: data.description,
        image: imageUrl,
        donorEmail: user.email,
        donorName: user.displayName,
        donorPhoto: user.photoURL,
        createdAt: new Date(),
      };

      // 3️⃣ save to MongoDB
      const res = await fetch("https://share-circle-server.vercel.app/donations", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(donationData),
      });

      if (res.ok) {
        Swal.fire("Success!", "Item donated successfully", "success");
        reset();
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Image upload or save failed", "error");
    }
  };

  return (
    <section className="py-16 bg-[#FFF8F1] min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full bg-white rounded-3xl shadow-sm border border-orange-100 p-8 md:p-12"
      >
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Donate an Item</h2>
          <p className="text-gray-500 mt-2">
            Provide the details below to list your item on the Circle.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(handleformSubmit)}>
          {/* Row 1: Item Name (Full Width) */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Item Name
            </label>
            <input
              type="text"
              {...register("itemName", { required: true })}
              placeholder="e.g. Winter Jacket, Desk Lamp..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
            />
            {errors.itemName && (
              <span className="text-red-500 text-sm">
                Item name is required
              </span>
            )}
          </div>

          {/* Row 2: Category & Condition (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Category
              </label>
              <select
                {...register("category", { required: true })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-white"
              >
                <option>Select Category</option>
                <option>Clothing</option>
                <option>Furniture</option>
                <option>Electronics</option>
                <option>Books</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Condition
              </label>
              <select
                {...register("condition", { required: true })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-white"
              >
                <option>New</option>
                <option>Gently Used</option>
                <option>Needs Repair</option>
              </select>
            </div>
          </div>

          {/* Row 3: Location & Quantity (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Pickup Location
              </label>
              <input
                type="text"
                {...register("location", { required: true })}
                placeholder="e.g. Downtown, Dhaka"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                {...register("quantity", {
                  required: true,
                  min: 1,
                })}
                placeholder="1"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
              />
            </div>
          </div>

          {/* Row 4: Description (Full Width) */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              rows="4"
              {...register("description", { required: true })}
              placeholder="Tell us a little about the item..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* Row 5: Photo Upload (Simple) */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Item Photo
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition-all cursor-pointer"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">Image is required</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-md shadow-orange-100 transition-all active:scale-[0.98]">
              Post Donation
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default DonateItem;

