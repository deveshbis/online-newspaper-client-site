/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Checkout = ({ subscribe }) => {


    const { amount } = subscribe;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const { user } = useAuth()
    const totalPrice = subscribe.amount;

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date()

                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);

                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for Payment Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            }
        }

    }
    return (
        <div className="font-[sans-serif] bg-white p-4">
            <div className="md:max-w-5xl max-w-xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 max-md:order-1">
                        <h2 className="text-3xl font-extrabold text-gray-800">Make a payment</h2>
                        <p className="text-gray-800 text-sm mt-4">
                            Complete your transaction swiftly and securely with our easy-to-use payment process.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 max-w-lg">
                            <div className="grid gap-4">
                                <CardElement
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
                                    className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus-within:border-purple-500 focus-within:bg-transparent outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-8 w-40 py-3.5 text-sm bg-purple-500 text-white rounded-md hover:bg-purple-600 tracking-wide"
                                disabled={!stripe || !clientSecret}
                            >
                                Pay
                            </button>
                        </form>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-md">
                        <h2 className="text-3xl font-extrabold text-gray-800">${amount}</h2>

                        <p className="text-red-600">{error}</p>
                        {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

