import HomeContentCard from './home-content1-card'
import './home.css'
import nordicchair from '../image/nordic-chair.png'
import kruzoaerochair from '../image/kruzo-aero-chair.png'
import  ergonomicchair from '../image/ergonomic-chair.png'
export default function Homecontent1(){
    return(
        <>
        <div className="home-content1">
            <div className="content">
                <h2>Crafted with excellent material.</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <button>Explore</button>
            </div>
            <div className='content-card'>
                <HomeContentCard
                image={nordicchair}
                name={"Nordic chair"}
                amount={"$50.00"}
                />
                 <HomeContentCard
                image={kruzoaerochair}
                name={"Kruzo Aero Chair"}
                amount={"$78.00"}
                />
                 <HomeContentCard
                image={ergonomicchair}
                name={"Erogonomic Chair"}
                amount={"$43.00"}
                />
            </div>  
        </div>
        
        </>
    )
}