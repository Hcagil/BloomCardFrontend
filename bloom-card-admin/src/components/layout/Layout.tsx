import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // Outlet'i import ediyoruz
import '../../styles/Layout.css';

const Layout: React.FC = () => {
    return (
        <div className="layout">
            <Header />
            <div className="layout-content flex">
                <Sidebar />
                <main className="flex-grow p-4">
                    {/* Outlet, children prop'unun yerini alır ve iç rotaları render eder */}
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
