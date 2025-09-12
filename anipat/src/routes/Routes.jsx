import { Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/product/ProductDetail";
import Shop from "../pages/product/Shop";
import Emergency from "../pages/Emergency_VetHelp";
import Shelter from "../pages/Shelter";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Feedback from "../pages/Feedback";

const createBrowser = () => {
    return <>
        {/* người 1:Thại */}
        <Route path="/" element={<Home />} />
        
        {/* người 2:Toại */}


        {/* người 3:Đạt */}
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product-detail' element={<ProductDetail/>}/>
        {/* người 4:Cường */}
        <Route path="/emergency" element={<Emergency />} />

        
        {/* người 5:Huy */}
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

    </>
   
}
export default createBrowser;