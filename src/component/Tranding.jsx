import { useEffect, useState } from "react";


const Tranding = () => {
    const [categoriesNews, setCategoriesNews] = useState([]);

    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setCategoriesNews(data));
    }, [])
    return (
        <div>
            {
                categoriesNews.map(catanews => (<div key={catanews._id} className="bg-white cursor-pointer rounded overflow-hidden group">
                    <div className="relative overflow-hidden">
                        <img src={catanews.image_url} alt="Blog Post 1" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                        <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">
                            {catanews.author.published_date}</div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-[#333]">{catanews.title}</h3>
                    </div>
                </div>))
            }
        </div>
    );
};

export default Tranding;