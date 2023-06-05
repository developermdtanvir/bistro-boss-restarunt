
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../src/hooks/useMenu.jsx';
import shopBanner from '../../assets/shop/banner2.jpg';
import Cover from "../../components/Cover/Cover";

function Shop() {
    const [menu] = useMenu();
    console.log(menu)
    return (
        <div>
            <Cover img={shopBanner} title={"OUR MENU"} subtitle={"Would You Like To Try DISH"} />
            <Tabs>
                <TabList>
                    <Tab className="uppercase">Salad</Tab>
                    <Tab className="uppercase">PIzza</Tab>
                    <Tab className="uppercase">soups</Tab>
                    <Tab className="uppercase">desserts</Tab>
                    <Tab className="uppercase">drinks</Tab>
                </TabList>

                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    )
}

export default Shop;