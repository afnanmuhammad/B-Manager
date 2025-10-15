import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import SubCategories from './pages/SubCategories'
import Products from './pages/Products'
import Customers from './pages/Customers'
import DailyInvoice from './pages/DailyInvoice'
import Ledger from './pages/Ledger'
import PointofSale from './pages/PointofSale'

function App() {
  return (
    <Routes>
      {/* Layout is the wrapper */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="categories" element={<Categories />} />
        <Route path="subCategories" element={<SubCategories />} />
        <Route path="products" element={<Products />} />
        <Route path="customers" element={<Customers />} />
        <Route path="dailyInvoice" element={<DailyInvoice />} />
        <Route path="ledger" element={<Ledger />} />
        <Route path="pointofSale" element={<PointofSale />} />
      </Route>
    </Routes>
  )
}

export default App
