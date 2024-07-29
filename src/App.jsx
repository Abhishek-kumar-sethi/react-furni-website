import './App.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './home-page/home'
import Homecontent1 from './home-page/home-content1';
import Homeleft from './home-page/home-left';
import Homeright from './home-page/home-right';
import Navbar from './navbar'
import Homeemail from './home-page/home-email';
import Homecontentfooter from './home-page/home-content-footer';
import Homefooter from './home-page/home-footer';  
import Shoppage from './shop-page/shop';
import Aboutpage from './about-page/about';
import Servicepage from './service-page/service';
import Blogpage from './blog-page/blog';
import Contactpage from './contact-page/contact';
import Cartpage from './cart-page/cart';
import { ContactPage, Shop } from '@mui/icons-material';
import Cartcontent from './cart-page/cart-table';
export default function App() {
   const router = createBrowserRouter([
      {
         path:"/",
         element:<><Navbar/><Homepage/></>
      },
      {
         path:"/home",
         element:<><Navbar/><Homepage/></>
      },
      {
         path:"/shop",
         element:<><Navbar/><Shoppage/></>
      },
      {
         path:"/about",
         element:<><Navbar/><Aboutpage/></>
      },
      {
         path:"/service",
         element:<><Navbar/><Servicepage/></>
      },
      {
         path:"/blog",
         element:<><Navbar/><Blogpage/></>
      },
      {
         path:"/contact",
         element:<><Navbar/><Contactpage/></>
      },
      {
         path:"/cart",
         element:<><Navbar/><Cartpage/></>
      }
   ])
return(
   <>
      <RouterProvider router={router}/>
   </>
  )
}
