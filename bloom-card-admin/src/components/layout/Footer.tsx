import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer bg-darkgrey text-white text-md ">
            <p>&copy; {new Date().getFullYear()} <span className='text-green font-bold'>Bloom</span> <span className="font-bold" >Card.</span> All rights reserved.</p>
        </footer>
    );
};

export default Footer;
