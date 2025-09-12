import { Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/product/ProductDetail";
import Shop from "../pages/product/Shop";

const createBrowser = () => {
    return <>
        {/* người 1:Thại */}
        <Route path="/" element={<Home />} />
        
        {/* người 2:Toại */}


        {/* người 3:Đạt */}
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product-detail' element={<ProductDetail/>}/>
        {/* người 4:Cường */}

        
        {/* người 5:Huy */}
    </>
   
}
export default createBrowser;