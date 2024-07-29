import Homecontent2rightbox from './home-content2-right-box'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import CompareArrowsSharpIcon from '@mui/icons-material/CompareArrowsSharp';
import './home.css'
export default function Homecontent2left(){
    return(
        <div className="home-content2-right">
        <header className='home-content2-right-header'>
        <h1>Why Choose Us</h1>
        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        </header>
        <div style={{display:"flex",alignItems:"start",justifyContent:"space-between"}}>
            <Homecontent2rightbox
                icon={<LocalShippingOutlinedIcon fontSize='large' className='truck'/>}
                heading={"Fast & Free Shipping"}
            />
            <Homecontent2rightbox
                 icon={<ShoppingBagOutlinedIcon fontSize='large' className='truck'/>}
                 heading={"Easy to Shop"}
            />
        </div>
        <div style={{display:"flex",alignItems:"start",justifyContent:"space-between"}}>
            <Homecontent2rightbox
                icon={<SupportOutlinedIcon fontSize='large' className='truck'/>}
                heading={"24/7 Support"}
            />
            <Homecontent2rightbox
                 icon={<CompareArrowsSharpIcon fontSize='large' className='truck'/>}
                 heading={"Hassle Free Returns"}
            />
        </div>
    </div>
    )
}