import { Route } from "react-router-dom";
import Home from "../pages/Home";

const createBrowser = () => {
    return <>
        <Route path="/" element={ <Home/>} />
    </>
   
}
export default createBrowser;