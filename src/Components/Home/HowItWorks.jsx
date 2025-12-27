import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Snap & Post",
            description: "Take a clear photo of your unused item and list it in seconds. Whether it's a book or a sofa, someone needs it.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            color: "bg-orange-100 text-orange-600",
        },
        {
            id: 2,
            title: "Connect",
            description: "Chat with interested neighbors through our secure messaging. Coordinate details and build a local bond.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            color: "bg-blue-100 text-blue-600",
        },
        {
            id: 3,
            title: "Pass it On",
            description: "Arrange a safe hand-off. Feel the joy of knowing your items are being put to good use instead of ending up in a landfill.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            ),
            color: "bg-green-100 text-green-600",
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Simple Logistics</h2>
                    <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900">How ShareCircle Works</h3>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
                        We’ve modernized the "Wall of Humanity" concept to make sharing seamless and safe.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                    {/* Desktop Connecting Line (Dashed) */}
                    <div className="hidden md:block absolute top-16 left-24 right-24 h-[2px] border-t-2 border-dashed border-gray-200 -z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.3 }} // Staggered entrance
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            {/* Icon Container */}
                            <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-xl shadow-gray-100 ${step.color}`}>
                                {step.icon}
                                {/* Step Number Badge */}
                                <div className="absolute -top-2 -right-2 w-10 h-10 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center font-bold text-gray-800 shadow-sm">
                                    {step.id}
                                </div>
                            </div>

                            {/* Text Content */}
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h4>
                            <p className="text-gray-500 leading-relaxed px-4">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

              

            </div>
        </section>
    );
};

export default HowItWorks;