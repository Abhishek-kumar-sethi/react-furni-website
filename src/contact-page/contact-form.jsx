import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './contact.css'
export default function Contactform(){
    return(
        <form className='contact-form'>
            <div className='contact-form-header'>
                <div>
                    <LocationOnIcon className='icon'/>
                    <span>43 Raymouth Rd. Baltemoer, London 3910</span>
                </div>
                <div>
                    <EmailIcon className='icon'/>
                    <span>info@yourdomain.com</span>
                </div>
                <div>
                    <LocalPhoneIcon className='icon'/>
                    <span>+1 294 3925 3939</span>
                </div>
            </div>
            <div>
                <div>
                <label htmlFor="first-name">First name</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="last-name">Last name</label>
                <input type="text" />
                </div>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="Email" />
            </div>
            <div>
                <label htmlFor="Message">Message</label>
                <textarea name="message" id=""></textarea>
            </div>
            <button>Send Message</button>
        </form>
    )
}