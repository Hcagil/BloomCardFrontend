import {React, useState} from 'react'

export default function Dropdownbutton() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
        <div className="flex justify-end px-4 pt-4">
            <button
            id="dropdownButton"
            onClick={toggleDropdown}
            className={`inline-block text-gray-500 text-gray-400 hover:bg-gray-100 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:ring-gray-700 rounded-lg text-sm p-1.5 ${
                isOpen ? 'bg-gray-100 bg-gray-700' : ''
            }`}
            type="button"
            >
            <span className="sr-only">Open dropdown</span>
            <svg
                className={`w-5 h-5 transition-transform transform ${
                isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
            >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            </button>
            {/* Dropdown menu */}
            {isOpen && (
            <div
                id="dropdown"
                className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700"
            >
                <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-gray-600 text-gray-200 hover:text-white"
                    >
                    Edit
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-gray-600 text-gray-200 hover:text-white"
                    >
                    Export Data
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 hover:bg-gray-600 text-gray-200 hover:text-white"
                    >
                    Delete
                    </a>
                </li>
                </ul>
            </div>
            )}
        </div>

    </div>
  )
}
