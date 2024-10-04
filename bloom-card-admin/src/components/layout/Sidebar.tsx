import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faTools, faUsers, faCogs } from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobil menü durumu

    return (
        <>
            {/* Hamburger menüsü butonu (sadece mobilde görünür) */}
            <button 
                className="lg:hidden fixed top-4 right-20 z-50 p-2 text-white bg-darkgrey rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl " />
            </button>

            {/* Sidebar */}
            <aside className={`lg:w-64 w-64 bg-darkgrey shadow-xl h-full fixed lg:static z-40 transform transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}>
                <nav className="px-4 py-6">
                    <ul className="space-y-4">
                        <li>
                            <NavLink 
                                to="/customize" 
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-green text-darkgrey' : 'text-white'}`
                                }
                            >
                                <FontAwesomeIcon icon={faTools} className="mr-3" />
                                Düzenle
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contacts" 
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 rounded-lg text-white hover:bg-gray-700 ${isActive ? 'bg-green-600' : ''}`
                                }
                            >
                                <FontAwesomeIcon icon={faUsers} className="mr-3" />
                                Kişilerim
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/settings" 
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 rounded-lg text-white hover:bg-gray-700 ${isActive ? 'bg-green-600' : ''}`
                                }
                            >
                                <FontAwesomeIcon icon={faCogs} className="mr-3" />
                                Ayarlar
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
