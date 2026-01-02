import React from 'react';
import { motion } from 'framer-motion';
import useAuth from '../../hooks/useAuth';
import useRole from '../../hooks/useRole';
const Profile = () => {
    const { user } = useAuth();
 
   const {role} = useRole()
   console.log(role);

    // Fallback data if user is not fully loaded
    const userData = {
        name: user?.displayName || "Community Member",
        email: user?.email || "member@sharecircle.com",
        role: "Impact Maker", // Or user?.role
        id: user?.uid?.slice(0, 8) || "SC-8821",
        image: user?.photoURL || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    };

    return (
        <div className="min-h-screen bg-[#FFF8F1] py-12 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-[3rem] shadow-xl shadow-orange-100/50 border border-orange-50 overflow-hidden"
                >
                    {/* Top Banner Accent */}
                    <div className="h-32 bg-gradient-to-r from-orange-400 to-orange-500 w-full"></div>

                    <div className="px-8 pb-12 -mt-16">
                        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
                            <div className="relative">
                                <img
                                    src={userData.image}
                                    alt="Profile"
                                    className="w-40 h-40 rounded-[2.5rem] border-8 border-white object-cover shadow-lg"
                                />
                                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                            </div>

                            <div className="text-center md:text-left flex-1 pb-2">
                                <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest mb-2">
                                    {role}
                                </div>
                                <h1 className="text-4xl font-black text-gray-900">{userData.name}</h1>
                                <p className="text-gray-500 font-medium">Verified Circle Member</p>
                            </div>

                            <button className="btn btn-outline border-gray-200 text-gray-600 hover:bg-gray-50 rounded-2xl px-6 normal-case">
                                Edit Profile
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

                            {/* Account Details Section */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-gray-800 border-b border-orange-100 pb-2">Account Details</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                                        <span className="text-2xl">📧</span>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase">Email Address</p>
                                            <p className="text-gray-700 font-semibold">{userData.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                                        <span className="text-2xl">🆔</span>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase">Member ID</p>
                                            <p className="text-gray-700 font-mono text-sm">{userData.id}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Impact Section */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-gray-800 border-b border-orange-100 pb-2">Your Impact</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-orange-50 p-6 rounded-3xl text-center">
                                        <p className="text-3xl font-black text-orange-500">12</p>
                                        <p className="text-xs font-bold text-orange-700/60 uppercase mt-1">Donated</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-3xl text-center">
                                        <p className="text-3xl font-black text-blue-500">04</p>
                                        <p className="text-xs font-bold text-blue-700/60 uppercase mt-1">Received</p>
                                    </div>
                                </div>
                                <div className="p-4 border border-dashed border-orange-200 rounded-2xl text-center">
                                    <p className="text-xs text-gray-500">Donate Your Items Safely</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;