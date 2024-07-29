import './home.css'
export default function Homecontent3card({img}){
    return(
        <div className="home-content3-card">
            <div className="home-content3-card-head">
                <img src={img} alt="" />
            </div>
            <div>
                <h5>Nordic Chair</h5>
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <a href="#">Read More</a>
            </div>
        </div>  
    )
}