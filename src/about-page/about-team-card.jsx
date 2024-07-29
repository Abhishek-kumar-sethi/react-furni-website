import './about.css'
export default function Aboutcard({img,name}){
    return(
        <div className="about-card">
            <header className='about-card-header'>
                <img src={img} alt="" />
            </header>
            <div className="about-card-content">
                <h1>{name}</h1>
                <h5>CEO, Founder, Atty.</h5>
                <div>
                Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </div>
                <a href="#">Learn more</a>
            </div>
        </div>
    )
}