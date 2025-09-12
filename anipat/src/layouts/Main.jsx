// Main.jsx
import React from 'react'
import AppRoutes from '../routes/Routes'   // ✅ import đúng component

export default function Main() {
  return (
    <div>
      <AppRoutes />   {/* ✅ render trực tiếp */}
    </div>
  )
}
