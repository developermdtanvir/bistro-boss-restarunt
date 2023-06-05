import useDocumentTitle from "../../../hooks/useDocumentTitle";
import Banner from "./Banner";
import Boss from "./Boss";
import Featured from "./Featured";
import Manue from "./Manue";
import Recommandas from "./Recommandas";
import Swper from "./Swper";
import Testimonials from "./Testimonials";

function Home() {
    useDocumentTitle('Home')
    return (
        <div>
            <Banner />
            <Swper />
            <Boss />
            <Manue />
            <Recommandas />
            <Featured />
            <Testimonials />
        </div>
    )
}

export default Home;