import React from 'react';

interface FormButtonProps {
    isSubmitting: boolean;
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
}

const FormButton: React.FC<FormButtonProps> = ({
    isSubmitting = false, // Varsayılan olarak false
    text,
    type = "submit",  
    onClick,
    className = "",  
}) => {
    return (
        <button 
            type={type}
            className={`py-2 px-4 bg-green text-darkgrey font-semibold rounded-md shadow hover:bg-darkgreen focus:outline-none${className}`}
            disabled={isSubmitting}
            onClick={onClick}
            
        >
            {isSubmitting ? 'Submitting...' : text}
        </button>
    );
};

export default FormButton;
