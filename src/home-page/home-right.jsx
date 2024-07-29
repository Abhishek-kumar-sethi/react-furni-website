import './home.css'
export default function Homeright({pageheading}){
    return(
        <div className="home-right">
            <h1>{pageheading}</h1>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <div className="btn">
                <button>Shop Now</button>
                <button>Explore</button>
            </div>
        </div>
    )
}