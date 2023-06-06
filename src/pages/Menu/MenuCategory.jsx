import { Link } from 'react-router-dom';
import Cover from '../../components/Cover/Cover';
import MenuItem from '../../components/MenuItem/MenuItem';
function MenuCategory({ item, coverImage, coverTitle }) {

    return (
        <div>
            {coverTitle && <Cover img={coverImage} title={coverTitle} subtitle={'Wouuld you like to try a dish'} />}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    item.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
            <Link to={`/shop/${coverTitle}`} className='flex justify-center'><button className="btn text-orange-500 border-0 border-b-4 bg-slate-300 border-orange-500">order</button></Link>
        </div>
    )
}

export default MenuCategory;