import React from 'react'
import Table from '../components/Table'

const Products = () => {
    return (
        <div>
            <Table title="List of Products" showSubCategory={false} showExportButton={false} />
        </div>
    )
}

export default Products