import axios from "axios";
import { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function Recommandas() {
    const [salad, setSalad] = useState([]);
    console.log(salad)
    useEffect(() => {
        axios.get('manu.json')
            .then(data => setSalad(data.data.filter(item => item.category === 'salad').slice(0, 3)))
    }, [])
    return (
        <div>
            <SectionTitle heading={'CHEF RECOMMENDS'} subHeading={'should Try'} />
            <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 container gap-5">
                {
                    salad.map(item => <div className="card w-auto bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.recipe}</p>
                            <div className="card-actions justify-center">
                                <AwesomeButton className=" uppercase" type="primary">buy now</AwesomeButton>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Recommandas;