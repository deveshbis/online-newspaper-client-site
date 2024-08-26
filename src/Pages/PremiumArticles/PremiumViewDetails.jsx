import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const PremiumViewDetails = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const { data: premArticleView = [] } = useQuery({
        queryKey: ['premArticleView'],
        queryFn: async () => {
            const res = await axiosSecure.get(`allPremiumArticleView/${id}`);
            return res.data
        }

    })
    console.log(premArticleView);
    return (
        <div className="mt-10">

            <div className="max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64" src={premArticleView.image} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{premArticleView.publisher}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{premArticleView.title}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{premArticleView.description}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">

                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">Author: {premArticleView.authorName}</a>
                            </div> <br />
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Date: {premArticleView.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumViewDetails;