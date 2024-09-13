"use client"
import React from 'react';
import { twMerge } from 'tailwind-merge'


const Typography = ({
    variant = 'body1',
    component = 'p',
    className = '',
    children,
    ...rest
}) => {

    const DefaultComponent = () => {
        switch (variant) {
            case 'h1':
                return 'h1';
            case 'h2':
                return 'h2';
            case 'h3':
                return 'h3';
            case 'h4':
                return 'h4';
            case 'h5':
                return 'h5';
            case 'h6':
                return 'h6';
            case 'body1':
                return 'p';
            case 'div':
                return 'div'
            default:
                return 'p';
        }
    };

    // Determine the component to render
    const Component = component || DefaultComponent();

    // Define Tailwind CSS classes based on the variant prop
    const getClasses = () => {
        switch (variant) {
            case 'h1':
                return 'text-3xl md:text-4xl font-bold';
            case 'h2':
                return 'text-2xl font-semibold';
            case 'h3':
                return 'text-xl font-semibold';
            case 'h4':
                return 'text-lg font-semibold';
            case 'h5':
                return 'text-base font-semibold';
            case 'h6':
                return 'text-sm font-semibold';
            case 'body1':
                return 'text-base leading-relaxed';
            default:
                return 'text-base';
        }
    };

    // Combine default and custom classes
    const combinedClasses = twMerge('typography', getClasses(), className,);

    // Render component with Tailwind CSS classes
    return (
        <Component className={combinedClasses} {...rest}>
            {children}
        </Component>
    );
};

export default Typography;