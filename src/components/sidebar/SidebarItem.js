import { useState, useContext } from "react";
import PositionContext from "../../store/RouteContextProvider";
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'; // Import icons for toggling

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false);
    const { updateCurrentPage, current } = useContext(PositionContext);  
    const navigate = useNavigate();

    const setPageNo = (position) => {
        updateCurrentPage(position);
    };

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default behavior of anchor tag
        setPageNo(item.position);
        navigate(item.path);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className="sidebar-title">
                <span>
                    <a href={item.path} className="sidebar-item plain" onClick={handleClick}>
                        {item.title}
                    </a>
                </span>
             
            </div>
            <div className="sidebar-content">
                {item.childrens && item.childrens.map((child, index) => (
                    <SidebarItem key={index} item={child} />
                ))}
            </div>
        </div>
    );
}
