import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    console.log(categories);

    return (
        <div>
            <div className="space-y-6">
                <h1 className="text-3xl">All Category</h1>
                {

                    categories.map(category =>
                        <Link className="block ml-4 text-xl font-semibold text-center"
                            to={`/category/${category.id}`}
                            key={category.id}>{category.name}</Link>)
                }
            </div>
            <div>
                <div className="bg-white cursor-pointer rounded overflow-hidden group">
                    <div className="relative overflow-hidden">
                        <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                        <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">June 10, 2023</div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;