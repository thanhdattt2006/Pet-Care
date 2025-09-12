import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Emergency from "../pages/Emergency_VetHelp";

const createBrowser = () => {
    return <>
        {/* người 1:Thại */}
        <Route path="/" element={<Home />} />
        
        {/* người 2:Toại */}


        {/* người 3:Đạt */}


        {/* người 4:Cường */}
        <Route path="/emergency" element={<Emergency />} />

        
        {/* người 5:Huy */}
    </>
   
}
export default createBrowser;