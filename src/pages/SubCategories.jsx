import React from 'react'
import Table from '../components/Table'

const SubCategories = () => {
    return (
        <div>
            <Table title="List of Sub Categories" showSubCategory={false} addButtonText="+ Add New Sub-Category" />
        </div>
    )
}

export default SubCategories