import './home.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Homecontentfooterright(){
    return(
        <div className='home-content-footer-content-right'>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
            <div>
                <FacebookOutlinedIcon className='social-icon' fontSize='small'/>
                <XIcon className='social-icon' fontSize='small'/>
                <InstagramIcon className='social-icon' fontSize='small'/>
                <LinkedInIcon className='social-icon' fontSize='small'/>
            </div>
        </div>
    )
}