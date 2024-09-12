import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const SettingsOptions: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('Selected language:', event.target.value);
        // Dil değiştirme işlemleri burada yapılabilir
    };

    return (
        <div className="settings-options">
            <h3>Settings</h3>

            <div className="settings-item">
                <label htmlFor="theme-select">Theme:</label>
                <button onClick={toggleTheme}>
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
            </div>

            <div className="settings-item">
                <label htmlFor="language-select">Language:</label>
                <select id="language-select" onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="tr">Türkçe</option>
                    <option value="es">Español</option>
                    <option value="de">Deutsch</option>
                </select>
            </div>
        </div>
    );
};

export default SettingsOptions;
