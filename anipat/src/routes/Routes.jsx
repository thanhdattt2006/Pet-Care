import { Route } from "react-router-dom";
import Home from "../pages/Home";
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


        {/* người 4:Cường */}

        
        {/* người 5:Huy */}
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

    </>
   
}
export default createBrowser;