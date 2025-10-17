import React from "react";
import { icons } from "../assets/images";

const Customers = () => {
    // Sample customer data
    const customers = [
        {
            id: 1,
            name: "Afnan",
            address: "Karachi, Pakistan",
            email: "afnan@example.com",
            contact: "0312-1234567",
        },
        {
            id: 2,
            name: "Talha",
            address: "Lahore, Pakistan",
            email: "talha@example.com",
            contact: "0321-9876543",
        },
        {
            id: 3,
            name: "Kashif",
            address: "Islamabad, Pakistan",
            email: "kashif@example.com",
            contact: "0333-6547890",
        },
        {
            id: 4,
            name: "Irfan",
            address: "Multan, Pakistan",
            email: "irfan@example.com",
            contact: "0345-8529637",
        },
    ];

    return (
        <div className="container mx-auto p-6">
            {/* Heading */}
            <div className="flex justify-between items-center  mb-8">
                <button className="bg-[#0A06F4] w-60 rounded-lg py-3 px-4 text-white text-base font-bold">
                    + Add New Customer
                </button>


            </div>
            <div className="flex justify-between items-center mt-10">
                <h2 className="text-[#343C6A] text-xl font-semibold">
                    List of Customers
                </h2>

                <div className="flex items-center bg-white rounded-[40px] px-4 py-2 w-80 shadow-sm">
                    <input
                        type="text"
                        placeholder="Search for something"
                        className="flex-1 outline-none border-none bg-transparent text-gray-600"
                    />
                    <img
                        src={icons.search_icon}
                        alt="search"
                        className="h-5 w-5 text-gray-500"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl mt-6 shadow-lg overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider">
                                ID
                            </th>
                            <th className="text-left px-6 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider">
                                Name
                            </th>
                            <th className="text-left px-6 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider">
                                Address
                            </th>
                            <th className="text-left px-14 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider">
                                Email
                            </th>
                            <th className="text-left px-6 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider">
                                Contact
                            </th>
                            <th className="text-left px-16 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                    #{customer.id}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {customer.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {customer.address}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {customer.email}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {customer.contact}
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-[#16DBCC] hover:text-[#22a59b] border border-[#16DBCC] rounded-full py-2 px-4 font-medium text-sm mr-3">
                                        Edit
                                    </button>
                                    <button className="text-[#FE5C73] hover:text-[#d7253f] border border-[#FE5C73] rounded-full py-2 px-4 font-medium text-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Customers;
