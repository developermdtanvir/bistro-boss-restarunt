import treeCover from '../../assets/home/chef-service.jpg';
import ourmenu from '../../assets/menu/banner3.jpg';
import Cover from '../../components/Cover/Cover';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory';
function Menu() {

    useDocumentTitle('menu');

    const [menu] = useMenu();
    const salad = menu.filter(menu => menu.category === 'salad');
    const drinks = menu.filter(menu => menu.category === 'drinks');
    const soup = menu.filter(menu => menu.category === 'soup');
    const pizza = menu.filter(menu => menu.category === 'pizza');
    const dessert = menu.filter(menu => menu.category === 'dessert');
    const offered = menu.filter(menu => menu.category === 'offered');


    return (
        <div>
            <Cover img={ourmenu} title={'OUR MENU'} subtitle={'Wouuld you like to try a dish'} />
            <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss" />
            <MenuCategory item={offered} />
            <MenuCategory item={dessert} coverImage={treeCover} coverTitle={"desserts"} />
            <MenuCategory item={pizza} coverImage={treeCover} coverTitle="pizza" />
            <MenuCategory item={salad} coverImage={treeCover} coverTitle="salads" />
            <MenuCategory item={soup} coverImage={treeCover} coverTitle="soup" />
        </div>
    )
}

export default Menu;