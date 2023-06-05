import ourmenu from '../../assets/menu/banner3.jpg';
import Cover from '../../components/Cover/Cover';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import useMenu from '../../hooks/useMenu';
import Manue from '../Home/Home/Manue';
function Menu() {

    useDocumentTitle('menu');

    const menu = useMenu()
    return (
        <div>
            <Cover img={ourmenu} title={'OUR MENU'} subtitle={'Wouuld you like to try a dish'} />
            <Manue />
        </div>
    )
}

export default Menu;