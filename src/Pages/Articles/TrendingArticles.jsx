// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';





const TrendingArticles = () => {
    const [news, setnews] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/articles`)
        // fetch("news.json")
            .then(res => res.json())
            .then(data => setnews(data))
    }, [])
    // console.log(news);

    const truncateContent = (content, maxLength) => {
        const words = content.split(' ');
        if (words.length > maxLength) {
            return words.slice(0, maxLength).join(' ') + '...';
        } else {
            return content;
        }
    };
    return (
        <div>
            {
                news.map(aNews => <div key={aNews._id} className="bg-white rounded overflow-hidden">
                    <img src={aNews.image} alt="Blog Post 1" className="w-full h-full object-cover" />
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-3">{aNews.headline}</h3>
                        <p className="text-gray-500 text-sm">{truncateContent(aNews.content, 50)}</p>
                        <p className="text-gray-800 text-[13px] font-semibold mt-4">{aNews.date}</p>
                        {aNews.content.split(' ').length > 50 && (
                            <Link to={`/article/${aNews._id}`} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]">Read More</Link>
                        )}
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default TrendingArticles;