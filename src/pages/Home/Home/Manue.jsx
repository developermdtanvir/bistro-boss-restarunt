import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import MenuItem from "../../../components/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

function Manue() {

    const [menu] = useMenu();


    return (
        <section className=" lg:mt-36">
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'} />

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    menu.filter(item => item.category === 'popular').map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center" >
                <AwesomeButton type="secondary">View Full Menu</AwesomeButton>
            </div>
        </section>
    )
}

export default Manue;