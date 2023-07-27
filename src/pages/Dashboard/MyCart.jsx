import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

function MyCart() {
    const [cart, refetch] = useCart();
    // let sum = 0;
    // cart.map(item => {
    //     sum = sum + item.price
    // })

    // consolse.log(cart);

    console.log(cart);

    let sum = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
    }, 0);

    const removeFromCart = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-restaurant-server-ecru.vercel.app/cart/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })

            }
        })


    }





    return (
        <div className="py-10">
            <div className="uppercase flex items-center justify-evenly">
                <h1 className=" text-2xl">Total Cart {cart.length}</h1>
                <p className=" text-2xl">total price {sum}</p>
                <Link to={'/dashboard/payment'}><button className="btn btn-sm btn-warning">pay</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>item image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => <tr>
                                <th>{ }</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={item.image} />
                                    </div>
                                </div></td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td ><AiFillDelete onClick={() => removeFromCart(item._id)} className=" text-4xl bg-red-700 cursor-pointer rounded-md p-2" /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyCart;