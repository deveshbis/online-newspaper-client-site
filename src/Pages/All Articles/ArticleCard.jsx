import React from 'react';
import { Link } from 'react-router-dom';


const ArticleCard = ({ approvedArticle }) => {
    const {_id, image, title, publisher, description, tags } = approvedArticle;
    const truncatedDescription = description.length > 200 ? `${description.substring(0, 200)}...` : description;

    return (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img className="object-cover w-full h-64" src={image} alt="Article"/>

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{publisher}</span><br />
                        <span className="text-[8px] font-medium text-black uppercase dark:text-blue-400">#{tags}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{title}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{truncatedDescription}</p>
                    </div>
                    
                    <Link to={`/approvedArticle/${_id}`}><button className="btn btn-outline">View Details</button></Link>
                </div>
        </div>
    );
};

export default ArticleCard;