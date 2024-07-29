import './home.css'
import couch from '../image/couch.png'
export default function Homeleft(){
    return(
        <div className="home-left">
            <img src={couch} alt='couch image' className='home-left-img'/>
        </div>
    )
}