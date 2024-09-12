// src/components/forms/elements/FormInput.tsx
import React from 'react';

interface FormInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}

const FormInput: React.FC<FormInputProps> = ({
    label,
    name,
    value,
    onChange,
    onBlur,
    placeholder = '',
    type = 'text',
}) => {
    return (
        <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className="bg-transparent shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline hover:border-gray-600 placeholder-gray-600"
            />
        </div>
    );
};

export default FormInput;
