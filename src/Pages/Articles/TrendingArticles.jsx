import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';





const TrendingArticles = () => {
    const [news, setnews] = useState([]);
    useEffect(()=>{
        fetch("articles.json")
        .then(res => res.json())
        .then(data => setnews(data))
    } ,[])
    console.log(news);

    const truncateContent = (content, maxLength) => {
        const words = content.split(' ');
        if (words.length > maxLength) {
            return words.slice(0, maxLength).join(' ') + '...'; // Truncate content and add ellipsis
        } else {
            return content;
        }
    };
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            
            news.map(aNews=><SwiperSlide key={aNews.id}>
                <div className='space-y-3'>
                    <img src={aNews.image} className='h-full w-full' alt="" />
                    <h2 className="text-4xl">{aNews.headline}</h2>
                    <h4 className="text-xl">Date: {aNews.date}</h4>
                    <p>{truncateContent(aNews.content, 50)}</p>
                    {aNews.content.split(' ').length > 50 && ( // Check if content exceeds 50 words
                            <Link to={`/article/${aNews.id}`} className="text-blue-500">See more</Link> // Link to new page
                        )}
                </div>

            </SwiperSlide>)
        }
        
      </Swiper>
    );
};

export default TrendingArticles;