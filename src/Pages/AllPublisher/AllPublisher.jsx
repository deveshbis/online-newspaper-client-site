import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AllPublisher = () => {
    const axiosSecure = useAxiosSecure()
    // const axiosPublic = useAxiosPublic()

    const { data: allPublisher = [] } = useQuery({
        queryKey: ["adminPublisher"],
        queryFn: async () => {
            const res = await axiosSecure.get("/adminPublisher")
            return res.data
        }

    })
    // console.log(allPublisher);
    return (
        <div className="mt-5">
            <h1 className="text-4xl border-l-8 border-indigo-500">All Publisher</h1>
            <div className="grid grid-cols-3 gap-6">
                {allPublisher.map((publisher, index) => (
                    <div key={index} className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-4">
                        <img className="object-cover w-full h-56" src={publisher.image} alt="avatar" />

                        <div className="py-5 flex justify-between items-center p-5">
                            <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">Branding Name</a>
                            <span className="text-sm text-gray-700 dark:text-gray-200">{publisher.publisher}</span>
                        </div>
                        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPublisher;