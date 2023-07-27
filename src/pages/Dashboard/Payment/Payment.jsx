import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY);


function Payment() {

    const [cart] = useCart();

    let total = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
    }, 0);



    return (
        <div className="space-y-40">
            <h1 className=" text-8xl">Total Price {total}</h1>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={total} />
            </Elements>
        </div>
    )
}

export default Payment;