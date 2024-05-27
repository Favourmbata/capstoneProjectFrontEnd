import {Outlet} from "react-router-dom";
import Navbar from "../component/reuseable/navbar/Navbar";
import Footer from "../component/reuseable/footer/Footer";

const Layout = ()=>{
   return(
       <>
       <Navbar/>
       <Outlet/>
       <Footer/>
       </>
   )
}
export default Layout;