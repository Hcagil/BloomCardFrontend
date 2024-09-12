import React from 'react';
import SettingsOptions from '../../components/dashboard/SettingOptions';

const SettingsPage: React.FC = () => {
    return (
        <div className="settings-page">
            <h2>Settings</h2>
            <SettingsOptions />
        </div>
    );
};

export default SettingsPage;
