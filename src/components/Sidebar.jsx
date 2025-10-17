import React from "react";
import { NavLink } from "react-router-dom";
import { icons } from "../assets/images";

const Sidebar = () => {
    // 🔹 Function returns classes for active/inactive states
    const linkClass = (isActive) => ({
        text: `block px-4 py-2  flex items-center gap-2 transition-all duration-200 ${isActive ? "text-[#0D6EFD] font-semibold" : "text-[#B1B1B1]"
            }`,
        icon: `h-5 w-5 transition-all duration-200 ${isActive ? "filter-blue" : "filter-gray"
            }`,
    });

    // 🔹 Menu items
    const menuItems = [
        { name: "Dashboard", path: "/", icon: icons.dashboard_icon },
        { name: "Categories", path: "/categories", icon: icons.categroies_icon },
        {
            name: "Sub Categories",
            path: "/subCategories",
            icon: icons.subCategroies_icon,
        },
        { name: "Products", path: "/products", icon: icons.product_icon },
        { name: "Customers", path: "/customers", icon: icons.customers_icon },
        { name: "Daily Invoice", path: "/dailyInvoice", icon: icons.invoice_icon },
        { name: "Ledger", path: "/ledger", icon: icons.ledger_icon },
        { name: "Point of Sale", path: "/pointofSale", icon: icons.sale_icon },
    ];

    return (
        <aside className="flex flex-col bg-white border-r border-[#E6EFF5] w-64 min-h-screen p-4">
            <div className="flex gap-4 justify-center items-center mb-4">
                <img
                    src={icons.business_icon}
                    alt="icon"
                    className="h-10 w-10 filter brightness-0 invert"
                    style={{
                        filter:
                            "invert(33%) sepia(92%) saturate(7483%) hue-rotate(202deg) brightness(97%) contrast(101%)",
                    }}
                />
                <span className="font-bold text-3xl text-[#B1B1B1] ">B-Manager</span>
            </div>

            <nav className="flex flex-col gap-1">
                {menuItems.map((item) => (
                    <NavLink key={item.path} to={item.path} end={item.path === "/"}>
                        {({ isActive }) => {
                            const cls = linkClass(isActive);
                            return (
                                <div className={cls.text}>
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className={`h-5 w-5 ${isActive ? "icon-blue" : "icon-gray"
                                            }`}
                                    />
                                    <span>{item.name}</span>
                                </div>
                            );
                        }}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
