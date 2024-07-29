import Aboutcard from "./about-team-card";
import person1 from '../image/person_1.jpg'
import person2 from '../image/person_2.jpg'
import person3 from '../image/person_3.jpg'
import person4 from '../image/person_4.jpg'
export default function Aboutcontentcard(){
    return(
        <div className="about-team">
            <h1>Our Team</h1>
            <div className="about-team-content">
                <Aboutcard
                img={person1}
                name={"Lawson Arnold"}
                />
                 <Aboutcard
                img={person2}
                name={"Jeremy Walker"}
                />
                 <Aboutcard
                img={person3}
                name={"Patrik White"}
                />
                 <Aboutcard
                img={person4}
                name={"Kathryn Ryan"}
                />
            </div>
        </div>
    )
}