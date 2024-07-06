'use client'
import React, { useEffect, useState } from 'react';

interface LoaderIconProps {
    showLoader: boolean;
    setShowLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoaderIcon: React.FC<LoaderIconProps> = ({ showLoader, setShowLoader }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false); // Hide loader after 1 second
        }, 2000);
    }, [showLoader]);

    return (
        <>
            {showLoader && (
                <div className='h-screen w-full flex absolute justify-center items-center'>
                    <div className='relative z-50'>
                        <span className="loader"></span>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoaderIcon;
