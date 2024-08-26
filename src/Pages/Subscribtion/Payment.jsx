import {  useParams } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import cardImg from "../../assets/card.jpg"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_STIPE);
const Payment = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()

    const { data: subscribe = [] } = useQuery({
        queryKey: ['subscribe'],
        queryFn: async () => {
            const res = await axiosSecure.get(`planSubscribe/${id}`);
            return res.data
        }

    })

    console.log(subscribe);
    return (

        <div className="mt-5">
            <Elements stripe={stripePromise}>
                <Checkout subscribe = {subscribe}></Checkout>
            </Elements>

        </div>
    );
};

export default Payment;
