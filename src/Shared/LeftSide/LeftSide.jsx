import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Tranding from "../../component/Tranding";


const LeftSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <div className="space-y-6">
                <h1 className="text-3xl text-center bg-black text-white px-5 py-3">All Category</h1>
                {/* <h1
                    className="px-5 py-3 inline-flex items-center w-full rounded-lg text-white text-base tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333] active:bg-black">
                    Category
                </h1> */}
                {

                    categories.map(category =>
                        <h3 className="block ml-4 text-xl font-semibold text-center cursor-pointer"
                            to={`/category/${category.id}`}
                            key={category.id}>{category.name}</h3>)
                }
            </div>
            <div className="space-y-3">
                <h1 className="text-3xl text-center bg-black text-white px-5 py-3 mt-5">Tranding News</h1>
                <Tranding></Tranding>
            </div>
        </div>
    );
};

export default LeftSide;