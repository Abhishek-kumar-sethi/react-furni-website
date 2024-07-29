import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { createBrowserRouter } from 'react-router-dom';
import './nav.css'
import { NavLink } from 'react-router-dom';
export default function Navbar(){
    return(
        <header>
            <div className='navbar'>
            <div>
            <h2>Furni <span>.</span></h2>
            </div>
            <nav>
                <ul>
                    {/* <li><a href="/home">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contact us</a></li> */}
                    <NavLink className={(e)=> e.isActive? "active":""} to="/home"><li><a href="#">Home</a></li></NavLink>
                    <NavLink className={(e)=> e.isActive? "active":""}  to="/shop"><li><a href="#">Shop</a></li></NavLink>
                    <NavLink className={(e)=> e.isActive? "active":""}  to="/about"><li><a href="#">About</a></li></NavLink>
                    <NavLink className={(e)=> e.isActive? "active":""}  to="/service"><li><a href="#">Service</a></li></NavLink>
                    <NavLink className={(e)=> e.isActive? "active":""}  to="/blog"><li><a href="#">Blog</a></li></NavLink>
                    <NavLink className={(e)=> e.isActive? "active":""}  to="/contact"><li><a href="#">Contact</a></li></NavLink>
                </ul>
                <div className='icon'>
                <PersonIcon/>
                <NavLink to="/cart"><ShoppingCartOutlinedIcon/></NavLink>
            </div>
            </nav>
            </div>
        </header>
    )
}