import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import AppRoutes from "./routes/Routes"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <>
            <AppRoutes/>
          </>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
