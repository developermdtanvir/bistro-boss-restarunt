
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../src/hooks/useMenu.jsx';
import shopBanner from '../../assets/shop/banner2.jpg';
import Cover from "../../components/Cover/Cover";
import useDocumentTitle from '../../hooks/useDocumentTitle.jsx';
import { AuthContext } from '../../providers/AuthProvider.jsx';
import Card from './Card.jsx';

function Shop() {
    const { cart, setCart, user } = useContext(AuthContext);





    useDocumentTitle('Shop')
    const [menu] = useMenu();
    const { category } = useParams();
    const salad = menu.filter(menu => menu.category === 'salad');
    const drinks = menu.filter(menu => menu.category === 'drinks');
    const soup = menu.filter(menu => menu.category === 'soup');
    const pizza = menu.filter(menu => menu.category === 'pizza');
    const dessert = menu.filter(menu => menu.category === 'dessert');
    const offered = menu.filter(menu => menu.category === 'offered');

    const categorys = ['salads', 'pizza', 'soup', 'desserts', 'drinks'];
    const intialIndex = categorys.indexOf(category);
    const [tabIndex, setTabIndex] = useState(intialIndex);

    return (
        <div>
            <Cover img={shopBanner} title={"OUR MENU"} subtitle={"Would You Like To Try DISH"} />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="flex flex-col justify-center items-center">
                <TabList className="flex space-x-5">
                    <Tab className="uppercase cursor-pointer">Salad</Tab>
                    <Tab className="uppercase cursor-pointer">PIzza</Tab>
                    <Tab className="uppercase cursor-pointer">soups</Tab>
                    <Tab className="uppercase cursor-pointer">desserts</Tab>
                    <Tab className="uppercase cursor-pointer">drinks</Tab>
                </TabList>

                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        salad.map(item => <Card item={item} />)
                    }
                </TabPanel>
                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        pizza.map(item => <Card item={item} />)
                    }
                </TabPanel>
                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        soup.map(item => <Card item={item} />)
                    }
                </TabPanel>
                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        dessert.map(item => <Card item={item} />)
                    }
                </TabPanel>
                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        drinks.map(item => <Card item={item} />)
                    }
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Shop;