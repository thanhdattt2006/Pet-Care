import React from 'react'
import createBrowser from '../routes/Routes'
import { Routes } from 'react-router-dom';

export default function Main() {
  let routes = createBrowser();
  return (
    <>
      <div className="container my-5">
        <Routes>
          {routes}
        </Routes>
      </div>
    </>
  )
}
