import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import './home.css'
export default  function Homeemail(){
    return(
        <div className="home-email">
            <div className='home-email-content'>
            <div>
                <EmailOutlinedIcon style={{color:"rgba(0,0,0,0.3)"}} fontSize='medium'/>
                <span>Subscribe to Newsletter</span>      
            </div>  
            <div>
                <input type="text" placeholder='Enter your name'/>
                <input type="email" name="" id="" placeholder='Enter your email'/>
                <button><TelegramIcon fontSize='medium'/></button>
            </div>
            
        </div>
        </div>
    )
} 