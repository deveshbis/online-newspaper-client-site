/* eslint-disable react/prop-types */
// import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { Link } from "react-router-dom";


const PremiumArticleCard = ({ premCard }) => {
    // eslint-disable-next-line react/prop-types
    const { title, image, description, publisher, _id } = premCard;
    // eslint-disable-next-line react/prop-types
    const truncatedDescription = description.length > 200 ? `${description.substring(0, 200)}...` : description;
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Premium Articles</h1>

                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={image} alt="" />

                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <p className="text-sm text-blue-500 uppercase">{publisher}</p>

                        <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                            {title}
                        </a>

                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            {truncatedDescription}
                        </p>

                        <Link to={`/premArticle/${_id}`}><button className="btn btn-outline">View Details</button></Link>

                        <div className="flex items-center mt-6">
                            <div className="mx-4">
                                <h1 className="text-sm text-gray-700 dark:text-gray-200"></h1>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumArticleCard;