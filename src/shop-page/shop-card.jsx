import HomeContentCard from "../home-page/home-content1-card"
import nordicchair from '../image/nordic-chair.png'
import kruzoaerochair from '../image/kruzo-aero-chair.png'
import  ergonomicchair from '../image/ergonomic-chair.png'
export default function Shopcard (){
    return(
        <div className="about-content-card">
            <div className='content-card'>
            <HomeContentCard
                image={ergonomicchair}
                name={"Erogonomic Chair"}
                amount={"$43.00"}
                />
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
            <div className='content-card'>
            <HomeContentCard
                image={ergonomicchair}
                name={"Erogonomic Chair"}
                amount={"$43.00"}
                />
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
    )
}