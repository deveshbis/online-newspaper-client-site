import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ArticlesViewDetails = () => {
    const { id } = useParams()
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/singleDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
    }, [id]);
    console.log(details);
    return (
        <div>
            <div className="mt-5 space-y-3">
               
                <h2 className="text-5xl font-extrabold">{details.headline}</h2>
                <img src={details.image} className='h-full w-full' alt="" />
                <p><span className="text-green-500 text-2xl font-bold">Date:</span> {details.date}</p>
                <p><span className="text-red-500 text-2xl font-bold">Publisher:</span> {details.publisher}</p>
                <p> <span className="text-blue-500 text-2xl font-bold">Content:</span> {details.content}</p>
            </div>
        </div>
    );
};

export default ArticlesViewDetails;

