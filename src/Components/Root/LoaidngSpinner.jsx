import React from 'react';

const LoaidngSpinner = () => {
    return (
<div class="flex flex-col items-center justify-center p-8 min-h-screen bg-orange-50/50 rounded-2xl">
    
    <div class="relative flex items-center justify-center w-24 h-24">
        <span class="loading loading-ring h-24 w-24 text-orange-600 absolute inset-0"></span>
        
        <span class="loading loading-ball h-12 w-12 text-orange-400 relative z-10"></span>

        <div class="absolute inset-0 m-auto w-16 h-16 bg-orange-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
    </div>

    <p class="mt-6 text-sm font-bold text-orange-700 uppercase tracking-widest animate-pulse opacity-80">
        Please Wait...
    </p>
</div>
    );
};

export default LoaidngSpinner;