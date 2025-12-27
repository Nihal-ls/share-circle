import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className="relative rounded-3xl m-5 overflow-hidden max-w-7xl mx-auto bg-[#FFF8F1] min-h-[600px] flex items-center">
            
            <motion.div 
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"
            />
            <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm tracking-wide uppercase"
                    >
                        🚀 Join the Community
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                        Connect. Share. <br />
                        <span className="text-orange-500">Circle Up.</span>
                    </h1>

                    <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                        ShareCircle is a community-driven platform where your unused items find a second home. Donate what you don't need and build a sustainable future.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link to='/signup' className="btn bg-orange-500 hover:bg-orange-600 text-white border-none px-10 rounded-xl text-lg h-auto py-4 shadow-lg shadow-orange-200 transition-all hover:scale-105 active:scale-95">
                            Join Us
                        </Link>
                         <Link to='/donate' className="btn btn-outline border-2 border-gray-300 hover:bg-gray-100 text-gray-700 px-10 rounded-xl text-lg h-auto py-4 transition-all">
                          Donate Now
                        </Link>
                        
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="flex items-center justify-center lg:justify-start gap-8 pt-4"
                    >
                        <div>
                            <p className="text-2xl font-bold text-gray-800">10k+</p>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Members</p>
                        </div>
                        <div className="w-[1px] h-10 bg-gray-200"></div>
                        <div>
                            <p className="text-2xl font-bold text-gray-800">500+</p>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Circles</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative"
                >
                    <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ 
                            duration: 6, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className="relative z-10 p-4 bg-white rounded-[2.5rem] shadow-2xl border border-orange-50 rotate-3"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                            alt="Community sharing"
                            className="rounded-[2rem] object-cover w-full h-[400px]"
                        />
                        
                        <motion.div 
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Successfully Shared</p>
                                <p className="font-bold text-gray-800">Item #1,204</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        animate={{ rotate: [-3, -1, -3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-orange-100 rounded-[3rem] -rotate-3 -z-10"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;