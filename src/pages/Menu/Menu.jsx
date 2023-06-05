import ourmenu from '../../assets/menu/banner3.jpg';
import useDocumentTitle from '../../hooks/useDocumentTitle';
function Menu() {

    useDocumentTitle('menu')
    return (
        <div>
            <img src={ourmenu} alt="" />
            <h1>Our Menu</h1>
        </div>
    )
}

export default Menu;