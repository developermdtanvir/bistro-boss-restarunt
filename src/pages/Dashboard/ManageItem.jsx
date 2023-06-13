import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useMenu from '../../hooks/useMenu';


function ManageItem() {
    const [menu, isLoading, refetch] = useMenu();

    const handleDeleteItem = id => {
        fetch(`http://localhost:3000/menu/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Successfully Delete',
                        'You clicked the button!',
                        'success'
                    )
                }
                refetch()
            })
    }


    if (isLoading) {
        return <h1 className=' text-2xl'>Loading.............</h1>
    }


    return (
        <div>
            <SectionTitle heading={'MANAGE ALL ITEMS'} subHeading={'Hurry Up!'} />
            <div className="overflow-x-auto">
                <h1>Total Item : {menu.length}</h1>
                <table className="table">
                    <thead className='bg-[#D1A054]'>
                        <tr>
                            <th>
                                <label>

                                </label>
                            </th>
                            <th className='text-white font-bold'>ITEM IMAGE</th>
                            <th className='text-white font-bold'>ITEM NAME</th>
                            <th className='text-white font-bold'>PRICE</th>
                            <th className='text-white font-bold'>ACTION</th>
                            <th className='text-white font-bold'>ACTION</th>
                            <th className='text-white font-bold'></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu.map(item => <tr key={item._id}>
                                <th>
                                    <label>

                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Yancy Tear</div>
                                            <div className="text-sm opacity-50">Brazil</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button className="btn bg-[#D1A054] text-white"><AiOutlineEdit className='text-2xl' /></button>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteItem(item._id)} className="btn bg-red-700 text-white"><AiFillDelete className='text-2xl' /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageItem;