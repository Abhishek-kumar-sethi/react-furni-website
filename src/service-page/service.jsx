import Homeright from "../home-page/home-right"
import Homeleft from "../home-page/home-left"
import Homecontent2rightbox from "../home-page/home-content2-right-box"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import CompareArrowsSharpIcon from '@mui/icons-material/CompareArrowsSharp';
import './service.css'
import Homecontent1 from "../home-page/home-content1";
import Homecontent4 from "../home-page/home-content4";
import Homeemail from "../home-page/home-email";
import Homecontentfooter from "../home-page/home-content-footer";
import Homefooter from "../home-page/home-footer";
import sofa from '../image/sofa.png'
export default function Servicepage(){
    return(
        <div>
            <div className="home">
                <Homeright pageheading={"Service"}/>
                <Homeleft/>
            </div>
            <div className="service-page">
            <div className="service-page-content">
            <Homecontent2rightbox
                icon={<LocalShippingOutlinedIcon fontSize='large' className='truck'/>}
                heading={"Fast & Free Shipping"}
            />
            <Homecontent2rightbox
                 icon={<ShoppingBagOutlinedIcon fontSize='large' className='truck'/>}
                 heading={"Easy to Shop"}
            />
            <Homecontent2rightbox
                icon={<SupportOutlinedIcon fontSize='large' className='truck'/>}
                heading={"24/7 Support"}
            />
            <Homecontent2rightbox
                 icon={<CompareArrowsSharpIcon fontSize='large' className='truck'/>}
                 heading={"Hassle Free Returns"}
            />
            </div>
            <div className="service-page-content">
            <Homecontent2rightbox
                icon={<LocalShippingOutlinedIcon fontSize='large' className='truck'/>}
                heading={"Fast & Free Shipping"}
            />
            <Homecontent2rightbox
                 icon={<ShoppingBagOutlinedIcon fontSize='large' className='truck'/>}
                 heading={"Easy to Shop"}
            />
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
            <Homecontent1/>
            <Homecontent4/>
            <div style={{display:"flex",paddingLeft:"30px"}}>
            <Homeemail/>
                <img src={sofa} alt="" className='service-sofa'/>
            </div>
            <Homecontentfooter/>
            <Homefooter/>
        </div>
    )
}