import { AiFillDelete } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useUsers from "../../hooks/useUsers";

function AllUsers() {
    const [user, isLoading, refetch, status] = useUsers();

    if (isLoading) {
        return <h1>Loading................</h1>
    }

    const handleMakeAdmin = id => {
        fetch(`http://localhost:3000/users/admin/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                }
            })
    }

    const handleDelete = id => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                    Swal.fire(
                        'successfully delete',
                        'You clicked the button!',
                        'success'
                    )
                    refetch()
                }
            })
    }

    return (
        <div>
            <SectionTitle heading={'MANAGE ALL ITEMS'} subHeading={'Hurry Up!'} />
            <div className="overflow-x-auto">
                <h1>Total users : {user.length}</h1>
                <table className="table">
                    <thead className='bg-[#D1A054]'>
                        <tr>
                            <th>
                                <label>

                                </label>
                            </th>
                            <th className='text-white font-bold'>USER EMAIL</th>
                            <th className='text-white font-bold'>USER NAME</th>
                            <th className='text-white font-bold'></th>
                            <th className='text-white font-bold'>ROLE</th>
                            <th className='text-white font-bold'>ACTION</th>
                            <th className='text-white font-bold'></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user.map(item => <tr key={item._id}>
                                <th>
                                    <label>

                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <h1>{item.email}</h1>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    {
                                        item.role === 'admin' ? 'admin' : <button className="btn bg-[#D1A054] text-white"><FaUserShield onClick={() => handleMakeAdmin(item._id)} className='text-2xl' /></button>
                                    }
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-red-700 text-white"><AiFillDelete className='text-2xl' /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers;