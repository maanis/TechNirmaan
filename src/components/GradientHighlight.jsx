import React from 'react';
// import '../app/globals.css'; // Import global styles for the font

export default function GradientHighlight({ children, className = "" }) {
    return (
        <span className={`relative inline-block whitespace-nowrap px-2 font-noto-serif ${className}`}>
            {/* Background Broken Paper Effect */}
            <span
                className="absolute -top-[3px] -bottom-[3px] -left-2 -right-2 -z-10 block bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"
                style={{
                    // This creates the jagged, torn paper edges
                    clipPath: 'polygon(0% 4%, 5% 0%, 15% 3%, 85% 1%, 95% 4%, 100% 0%, 99% 95%, 90% 100%, 10% 96%, 0% 100%)'
                }}
                aria-hidden="true"
            />
            {/* Foreground Text */}
            <span className="relative z-10 font-noto-serif text-white dark:text-neutral-950 font-bold">
                {children}
            </span>
        </span>
    );
}