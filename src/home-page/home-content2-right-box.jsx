import './home.css'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
export default function Homecontent2rightbox({icon,heading}){
    return(
        <div className='box1'>
            {icon}
            <span className='dot'></span>
            <h5>{heading}</h5>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
        </div>
    )
}