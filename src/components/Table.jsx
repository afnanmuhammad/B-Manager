import React from 'react'
import { icons } from '../assets/images'

const Table = () => {
    return (
        <div className='container mx-auto p-6'>
            {/* buttons sections */}
            <div className='flex gap-4 items-center'>
                <button className='bg-[#0A06F4] rounded-lg py-4 px-5 text-white text-xl font-bold'>+ Add New Category</button>
                <button className='bg-[#FE5C73] rounded-lg py-4 px-5 text-white text-xl font-bold'>Export PDF</button>
            </div>

            {/* table title and search */}
            <div className='flex justify-between items-center mt-10'>
                <h2 className='text-[#343C6A] text-xl font-semibold'>List of Categories</h2>

                <div className='flex items-center bg-white rounded-[40px] px-4 py-2 w-80 shadow-sm'>
                    <input
                        type='text'
                        placeholder='Search for something'
                        className='flex-1 outline-none border-none bg-transparent text-gray-600'
                    />
                    <img src={icons.search_icon} alt='search' className='h-5 w-5 text-gray-500' />
                </div>
            </div>

            {/* Table */}
            <div className='bg-white rounded-2xl shadow-lg mt-6 overflow-hidden'>
                <table className='w-full'>
                    {/* table head */}
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='text-left px-6 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider'>
                                ID
                            </th>
                            <th className='text-left px-6 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider'>
                                Name
                            </th>
                            <th className='text-left px-6 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider'>
                                Description
                            </th>
                            <th className='text-left px-6 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider'>
                                Action
                            </th>
                            <th className='text-left px-6 py-4 text-sm font-medium text-[#718EBF] uppercase tracking-wider'>
                                Sub Category
                            </th>
                        </tr>
                    </thead>

                    {/* table body */}
                    <tbody className='divide-y divide-gray-200'>
                        {/* Row 1 */}
                        <tr>
                            <td className='px-6 py-4 text-sm font-medium text-gray-900'>#12</td>
                            <td className='px-6 py-4 text-sm text-gray-900'>Bawa Qadra</td>
                            <td className='px-6 py-4 text-sm text-gray-500'>This is Kuni descripti...</td>
                            <td className='px-6 py-4'>
                                <button className='text-[#FE5C73] hover:text-[#d7253f] border rounded-full py-2 px-4 border-[#FE5C73] font-medium text-sm mr-3'>Delete</button>
                                <button className='text-[#16DBCC] hover:text-[#22a59b] border rounded-full py-2 px-4 border-[#16DBCC] font-medium text-sm'>Edit</button>
                            </td>
                            <td className='px-6 py-4'>
                                <button className='text-[#123288] hover:text-[#4368d0] border rounded-full py-2 px-4 border-[#123288] font-medium text-sm'>View</button>
                            </td>
                        </tr>

                        {/* Row 2 */}
                        <tr>
                            <td className='px-6 py-4 text-sm font-medium text-gray-900'>#4</td>
                            <td className='px-6 py-4 text-sm text-gray-900'>Irpasana</td>
                            <td className='px-6 py-4 text-sm text-gray-500'>irpaan chargeaye de</td>
                            <td className='px-6 py-4'>
                                <button className='text-[#FE5C73] hover:text-[#d7253f] border rounded-full py-2 px-4 border-[#FE5C73] font-medium text-sm mr-3'>Delete</button>
                                <button className='text-[#16DBCC] hover:text-[#22a59b] border rounded-full py-2 px-4 border-[#16DBCC] font-medium text-sm'>Edit</button>
                            </td>
                            <td className='px-6 py-4'>
                                <button className='text-[#123288] hover:text-[#4368d0] border rounded-full py-2 px-4 border-[#123288] font-medium text-sm'>View</button>
                            </td>
                        </tr>

                        {/* Row 3 */}
                        <tr>
                            <td className='px-6 py-4 text-sm font-medium text-gray-900'>#5</td>
                            <td className='px-6 py-4 text-sm text-gray-900'>Shamraiz</td>
                            <td className='px-6 py-4 text-sm text-gray-500'>cheen tapak dam dam</td>
                            <td className='px-6 py-4'>
                                <button className='text-[#FE5C73] hover:text-[#d7253f] border rounded-full py-2 px-4 border-[#FE5C73] font-medium text-sm mr-3'>Delete</button>
                                <button className='text-[#16DBCC] hover:text-[#22a59b] border rounded-full py-2 px-4 border-[#16DBCC] font-medium text-sm'>Edit</button>
                            </td>
                            <td className='px-6 py-4'>
                                <button className='text-[#123288] hover:text-[#4368d0] border rounded-full py-2 px-4 border-[#123288] font-medium text-sm'>View</button>
                            </td>
                        </tr>

                        {/* Row 4 */}
                        <tr>
                            <td className='px-6 py-4 text-sm font-medium text-gray-900'>#5</td>
                            <td className='px-6 py-4 text-sm text-gray-900'>Shamraiz</td>
                            <td className='px-6 py-4 text-sm text-gray-500'>cheen tapak dam dam</td>
                            <td className='px-6 py-4'>
                                <button className='text-[#FE5C73] hover:text-[#d7253f] border rounded-full py-2 px-4 border-[#FE5C73] font-medium text-sm mr-3'>Delete</button>
                                <button className='text-[#16DBCC] hover:text-[#22a59b] border rounded-full py-2 px-4 border-[#16DBCC] font-medium text-sm'>Edit</button>
                            </td>
                            <td className='px-6 py-4'>
                                <button className='text-[#123288] hover:text-[#4368d0] border rounded-full py-2 px-4 border-[#123288] font-medium text-sm'>View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table