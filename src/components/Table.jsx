import React from "react";
import { icons } from "../assets/images";

const Table = ({ title, showSubCategory = true, showExportButton = true, addButtonText = '+ Add New Category', }) => {
    return (
        <div className="container mx-auto p-6">
            {/* buttons sections */}
            <div className="flex gap-4 items-center">
                <button className="bg-[#0A06F4] rounded-lg w-60 py-3 px-5 text-white text-base font-bold">
                    {addButtonText}
                </button>
                {/* Conditionally show Export button */}
                {showExportButton && (
                    <button className="bg-[#FE5C73] rounded-lg py-3 px-5 text-white text-base font-bold">
                        Export PDF
                    </button>
                )}
            </div>

            {/* table title and search */}
            <div className="flex justify-between items-center mt-10">
                <h2 className="text-[#343C6A] text-xl font-semibold">{title}</h2>

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
            <div className="bg-white rounded-2xl shadow-lg mt-6 overflow-hidden">
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
                                Description
                            </th>
                            <th className="text-left px-16 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider">
                                Action
                            </th>

                            {/* show/hide Sub Category column */}
                            {showSubCategory && (
                                <th className="text-left px-2 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider">
                                    Sub Category
                                </th>
                            )}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {[
                            { id: 12, name: "Afnan", desc: "This is ... descripti..." },
                            { id: 4, name: "Talha", desc: "This is ... descripti..." },
                            { id: 5, name: "Kashif", desc: "This is ... descripti..." },
                            { id: 6, name: "Irfan", desc: "This is ... descripti..." },
                        ].map((row) => (
                            <tr key={row.id}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                    #{row.id}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">{row.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{row.desc}</td>
                                <td className="px-6 py-4">
                                    <button className="text-[#FE5C73] hover:text-[#d7253f] border rounded-full py-2 px-4 border-[#FE5C73] font-medium text-sm mr-3">
                                        Delete
                                    </button>
                                    <button className="text-[#16DBCC] hover:text-[#22a59b] border rounded-full py-2 px-4 border-[#16DBCC] font-medium text-sm">
                                        Edit
                                    </button>
                                </td>

                                {/* show/hide Sub Category button */}
                                {showSubCategory && (
                                    <td className="px-6 py-4">
                                        <button className="text-[#123288] hover:text-[#4368d0] border rounded-full py-2 px-4 border-[#123288] font-medium text-sm">
                                            View
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
