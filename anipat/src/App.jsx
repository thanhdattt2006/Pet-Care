import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
import { BrowserRouter, Routes } from 'react-router-dom'
import createBrowser from "./routes/Routes"
import './App.css'

function App() {
  const routes = createBrowser();

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
