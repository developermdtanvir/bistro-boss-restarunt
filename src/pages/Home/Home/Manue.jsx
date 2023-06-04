import axios from "axios";
import { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import MenuItem from "../../../components/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function Manue() {

    const [menu, setMenu] = useState([]);

    console.log(menu)

    useEffect(() => {
        axios.get('manu.json')
            .then(data => setMenu(data.data.filter(popular => popular.category === 'popular')))
    }, [])

    return (
        <section className=" lg:mt-36">
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'} />

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    menu.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center" >
                <AwesomeButton type="secondary">View Full Menu</AwesomeButton>
            </div>
        </section>
    )
}

export default Manue;