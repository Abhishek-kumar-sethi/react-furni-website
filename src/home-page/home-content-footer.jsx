import Homecontentfooterleft from './home-content-footer-content-left'
import Homecontentfooterright from './home-content-footer-content-right'
import './home.css'
export default function Homecontentfooter(){
    return(
        <div className="home-content-footer">
            <div className='home-content-footer-content'>
                <h1>Furni <span>.</span></h1>
                <div style={{display:'flex'}}>
                    <Homecontentfooterright/>
                    <Homecontentfooterleft/>
                </div>
            </div>
        </div>      
    )
}