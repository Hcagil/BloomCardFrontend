import React from 'react';

interface CheckboxProps {
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    label: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, checked, onChange, onBlur, label }) => {
    return (
        <div className="flex items-center">
        <input
            id={name}
            name={name}
            type="checkbox"
            checked={checked}
            onBlur={onBlur}
            onChange={onChange}
            className="hidden"
        />
        <label htmlFor={name} className="flex items-center cursor-pointer">
            <div className={`relative w-10 h-6 transition duration-200 ease-linear rounded-full ${checked ? 'bg-green' : 'bg-gray-400'}`}>
                <span
                    className={`absolute left-0 top-0 bottom-0 m-1 h-4 w-4 transition-all duration-200 ease-linear bg-darkgrey rounded-full shadow-md transform ${checked ? 'translate-x-4' : ''}`}
                />
            </div>
            <span className="ml-2 text-sm leading-5 text-white">{label}</span>
        </label>
    </div>
    );
};

export default Checkbox;
