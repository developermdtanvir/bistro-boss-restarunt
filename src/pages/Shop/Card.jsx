import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProvider";

function Card({ item }) {
    const [, refetch] = useCart()


    const navigate = useNavigate();
    const location = useLocation();

    const { user } = useContext(AuthContext);

    const addToCart = item => {
        const { name, image, price, _id } = item;

        if (user && user.email) {
            const cartItem = { foodId: _id, name, image, price, email: user.email };
            fetch('https://bistro-boss-restaurant-server-ecru.vercel.app/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        toast.success('add to cart successfully')
                        refetch()

                    }
                });
        } else {
            Swal.fire({
                title: 'Plize login to order the food',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location }, replace: true, })
                }
            })
        }
    }

    return (
        <div className=" mt-5">
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => addToCart(item)} className="btn text-orange-500 border-0 border-b-4 bg-slate-300 border-orange-500">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;