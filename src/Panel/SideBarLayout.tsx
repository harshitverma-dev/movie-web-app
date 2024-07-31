import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineHome } from "react-icons/hi2";
import { IoList } from "react-icons/io5";
import { BsBookmarks } from "react-icons/bs";

const SideBarLayout: React.FC = () => {
    const sidebarItems = [
        {
            navName: "Dashboard",
            navIcon: <HiOutlineHome size={23} />,
            navPath: "/"
        },
        {
            navName: "Product Listing",
            navIcon: <IoList size={22} />,
            navPath: "/product-list"
        },
        {
            navName: "Bookmark Product",
            navIcon: <BsBookmarks size={22} />,
            navPath: "/bookmark-products"
        }
    ]
    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {
                        sidebarItems?.map((items, index) => {
                            return (
                                <li key={index}>
                                    <Link to={items.navPath} className="flex !items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span>{items.navIcon}</span>
                                        <span className={`ms-3 ${index == 0 ? 'mt-[3px]' : ''}`}>{items.navName}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </aside>
    )
}

export default SideBarLayout;
