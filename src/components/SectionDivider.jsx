import React from 'react';

const SectionDivider = ({ type = "wave", flip = false }) => {
    return (
        <div className={`w-full overflow-hidden leading-none ${flip ? "transform rotate-180" : ""}`}>
            {type === "wave" && (
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-[var(--color-military-navy)]"
                    ></path>
                </svg>
            )}
            {type === "tech" && (
                <div className="relative h-16 w-full flex items-center justify-center">
                    <div className="absolute w-full h-[1px] bg-[var(--color-military-green)] opacity-30"></div>
                    <div className="relative z-10 bg-[var(--color-military-navy)] px-4">
                        <div className="w-12 h-2 border-l-2 border-r-2 border-[var(--color-military-green)]"></div>
                    </div>
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-military-gold)] rounded-full animate-pulse"></div>
                    <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[10px] text-[var(--color-military-gray)] font-mono tracking-widest">
                        SEC.04 // SYS.RDY
                    </div>
                </div>
            )}
        </div>
    );
};

export default SectionDivider;
