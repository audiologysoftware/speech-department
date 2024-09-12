import React, { useState, useEffect } from 'react';
import SidebarItem from '../sidebar/SidebarItem';
import items from '../../data/sidebar.json';
import Logo from '../../assest/logo.jpg';
import './Sidebar.css';

export default function Sidebar() {
    const [displaySidebar, setDisplaySidebar] = useState(false); // Default to hidden for mobile
    const [displayMenuIcon, setDisplayMenuIcon] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const toggleSidebar = () => {
        setDisplaySidebar(!displaySidebar);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setDisplaySidebar(false);
                setDisplayMenuIcon(true);
                setIsMobileView(true);
            } else {
                setDisplaySidebar(true);
                setDisplayMenuIcon(false);
                setIsMobileView(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {displayMenuIcon && (
                <div className="hamburger-icon" onClick={toggleSidebar}>
                    <img src="/hamburger.png" alt="Menu" />
                </div>
            )}

            <div className={`sidebar ${displaySidebar ? 'open' : ''}`}>
                <div className="logo">
                    <img src={Logo} alt="Eltol_Logo" className="logo_image" />
                </div>
                <div>
                    {items.map((item, index) => (
                        <SidebarItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}
