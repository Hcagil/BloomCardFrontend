import React, { useState } from 'react';

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs">
            <ul className="flex border-b border-green mb-4">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer py-2 px-4 text-l font-medium text-center transition-colors duration-300 ease-in-out ${
                            index === activeTab
                              ? 'bg-green text-darkgrey border-b-4 border-green rounded-sm'
                              : 'bg-transparent text-white hover:text-green border-b-2 border-transparent'
                          }`}
                          
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className="tab-content bg-darkgrey p-4 rounded-lg shadow">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
