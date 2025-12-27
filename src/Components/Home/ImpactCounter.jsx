import React from 'react';
import { motion } from 'framer-motion';

const ImpactCounter = () => {
  const stats = [
    {
      label: "Items Shared",
      value: "12,400",
      suffix: "+",
      description: "Unused items found new homes",
      icon: (
        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      )
    },
    {
      label: "Families Helped",
      value: "8,250",
      suffix: "",
      description: "Direct impact on our local community",
      icon: (
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      )
    },
    {
      label: "Waste Reduced",
      value: "45,000",
      suffix: " kg",
      description: "Keeping our planet clean and green",
      icon: (
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Container with soft shadow and white background to match your login card style */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="bg-white rounded-[3rem] shadow-xl shadow-orange-100/50 p-10 lg:p-16 border border-orange-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
                {stat.icon}
                
                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">
                  {stat.label}
                </h3>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-black text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-2xl font-bold text-orange-500">{stat.suffix}</span>
                </div>

                <p className="mt-2 text-gray-500 text-sm font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Quote Section */}
          <div className="mt-16 pt-10 border-t border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-600 font-medium italic text-center md:text-left max-w-xl">
              "We aren't just sharing items; we are rebuilding the <span className="text-orange-500 underline decoration-orange-200 decoration-2 underline-offset-4">Wall of Humanity</span> for the digital age."
            </p>
            <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none rounded-2xl px-8 h-auto py-4 shadow-lg shadow-orange-200 normal-case transition-all hover:scale-105">
              View All Items For Donation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactCounter;