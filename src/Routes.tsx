import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { HomePage } from './pages/Home'
import { CheckoutPage } from './pages/Checkout'
import { SuccessPage } from './pages/Success'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/sucesso/:id" element={<SuccessPage />} />
      </Route>
    </Routes>
  )
}
