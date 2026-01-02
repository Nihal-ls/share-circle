import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

// Icons
import {

  FaHandshake,
  FaPlus,
  FaEye,
  FaPencilAlt,
  FaCheckCircle,
  FaBoxOpen,
  FaGifts,
} from "react-icons/fa";
import { FcPackage } from "react-icons/fc";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);
  const [filter, setFilter] = useState("all");
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-donations?email=${user.email}`)
        .then(res => res.json())
        .then(data => setDonations(data));
    }
  }, [user?.email]);

  const filteredDonations =
    filter === "all"
      ? donations
      : donations.filter(d => (d.status || "available") === filter);

  const total = donations.length;
  const available = donations.filter(d => d.status === "available").length;
  const donated = donations.filter(d => d.status === "donated").length;

  return (
    <div className="min-h-screen p-6 bg-[#FFF8F1] space-y-10">

      {/* ===== Hero Header ===== */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 via-emerald-400 to-teal-400 p-8 text-white shadow-xl">
        <div className="relative z-10 flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold">My Donations</h1>
            <p className="text-green-100 mt-2 max-w-md">
              Track, manage, and measure the impact of items you’ve shared.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-white/90 text-green-700 px-5 py-2.5 rounded-xl font-semibold hover:bg-white transition">
            <FaPlus size={18} />
            Add Donation
          </button>
        </div>
      </div>

      {/* ===== Stats ===== */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Stat title="Total Donations" value={total} icon={<FaGifts />} />
        <Stat title="Available Items" value={available} icon={<FcPackage />} />
        <Stat title="Completed" value={donated} icon={<FaCheckCircle />} />
        <Stat title="People Helped" value={donated} icon={<FaHandshake />} />
      </div>

      {/* ===== Donation List ===== */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <h3 className="font-semibold text-xl">My Donation Items</h3>

          <div className="flex gap-2 flex-wrap">
            {["all", "available", "requested", "donated"].map(s => (
              <FilterTab
                key={s}
                active={filter === s}
                onClick={() => setFilter(s)}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </FilterTab>
            ))}
          </div>
        </div>

        {filteredDonations.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDonations.map(item => (
              <DonationCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ===== Donation Card ===== */
const DonationCard = ({ item }) => {
  const statusStyles = {
    donated: "bg-blue-100 text-blue-700",
    requested: "bg-yellow-100 text-yellow-700",
    available: "bg-green-100 text-green-700",
  };

  return (
    <div className="border rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition">
      <div className="relative">
        <img
          src={item.image}
          alt={item.itemName}
          className="h-48 w-full object-cover"
        />
        <span
          className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-medium ${
            statusStyles[item.status || "available"]
          }`}
        >
          {item.status || "available"}
        </span>
      </div>

      <div className="p-5 space-y-2">
        <h4 className="font-semibold text-lg">{item.itemName}</h4>
        <p className="text-sm text-gray-600">
          {item.category} • {item.condition}
        </p>
        <p className="text-sm">Quantity: {item.quantity}</p>
        <p className="text-sm">Location: {item.location}</p>
        <p className="text-sm text-gray-500">{item.description}</p>

        <div className="flex items-center gap-2 mt-2">
          <img
            src={item.donorPhoto}
            alt={item.donorName}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">{item.donorName}</span>
          <span className="text-xs text-gray-400 ml-auto">
            {new Date(item.createdAt).toLocaleDateString()}
          </span>
        </div>

        <div className="flex gap-2 pt-3">
          <ActionBtn icon={<FaEye />} tooltip="View" />
          <ActionBtn icon={<FaPencilAlt />} tooltip="Edit" />
        </div>
      </div>
    </div>
  );
};

/* ===== Stat Card ===== */
const Stat = ({ title, value, icon }) => (
  <div className="flex items-center gap-4 bg-white border rounded-2xl p-5 shadow">
    <div className="p-3 bg-green-100 text-green-600 rounded-xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  </div>
);

/* ===== Filter Tab ===== */
const FilterTab = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-sm font-medium ${
      active
        ? "bg-green-600 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    {children}
  </button>
);

/* ===== Action Button ===== */
const ActionBtn = ({ icon, tooltip }) => (
  <div className="relative group">
    <button className="p-2 rounded-lg border hover:bg-gray-100">
      {icon}
    </button>
    <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-700 text-white opacity-0 group-hover:opacity-100">
      {tooltip}
    </span>
  </div>
);

/* ===== Empty State ===== */
const EmptyState = () => (
  <div className="text-center py-20">
    <FaBoxOpen className="mx-auto text-gray-400 mb-4" size={56} />
    <p className="text-gray-500 mb-6">
      You haven’t donated any items yet
    </p>
    <button className="bg-green-600 text-white px-6 py-2.5 rounded-xl hover:bg-green-700">
      Donate Your First Item
    </button>
  </div>
);

export default MyDonations;
