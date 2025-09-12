import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
import Main from "./layouts/Main"
import Newsletter from "./layouts/Newsletter"
import Slider from "./layouts/Slider"
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        

        <Main />
        
        <Newsletter />
        
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
