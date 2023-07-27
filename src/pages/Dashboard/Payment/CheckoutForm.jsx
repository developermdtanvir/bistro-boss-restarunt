import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiousSecure";

function CheckoutForm({ price }) {

    console.log(price);

    const stripe = useStripe();
    const elements = useElements();

    const [axiosSecure] = useAxiosSecure();

    const { user } = useAuth()

    const [cardError, setCardError] = useState("")

    const [clientSecret, setClientSecret] = useState('');

    console.log('clientsecret', clientSecret);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    // useEffect(() => {
    //     fetch('https://bistro-boss-restaurant-server-ecru.vercel.app/create-payment-intent', {
    //         method: 'POST',
    //         headers: {
    //             'authorization': `bearer ${localStorage.getItem('token')}`
    //         },
    //         body: JSON.stringify({ price })
    //     }).then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }, [])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        console.log(card, 'card')

        if (card == null) {
            return;
        }

        // fetch('https://bistro-boss-restaurant-server-ecru.vercel.app/create-payment-intent', {
        //     method: "POST",
        //     headers: {
        //         'content-type': "application/json"
        //     },
        //     body: JSON.stringify({ price })
        // }).then(res => res.json())
        //     .then(data => console.log(data));

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError("")
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecreet, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymas email',
                    name: user?.displayName || 'anonymas name'
                }
            }
        }
        )

        if (confirmError) {
            console.log(confirmError);
        }

        console.log(paymentIntent);
    };
    return (
        <div className=" space-y-10">
            {
                cardError && <div className="text-red-600 text-2xl ">{cardError}</div>
            }
            <form onSubmit={handleSubmit}>
                <CardElement
                    className="space-x-10"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex justify-center items-center mt-10">

                    <button className="btn btn-sm btn-warning " type="submit" disabled={!stripe || !elements || !clientSecret}>
                        Pay
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;