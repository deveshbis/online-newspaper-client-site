import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";



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

    return (
        <div className="mt-5">
            {/* <h1 className="text-4xl border-l-8 border-indigo-500">All Publisher</h1> */}
            <div>
                {/* <div className="grid grid-cols-3 gap-6"> */}
                {allPublisher.map((publisher, index) => (
                    <div key={index} className="mt-3 bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <img src={publisher.image} alt="Blog Post 1" className="w-full h-60 object-cover" />
                        <div className="p-6">
                            <span className="text-sm block text-red-700 mb-2">Branding Name</span>
                            <h3 className="text-xl font-bold text-[#333]">{publisher.publisher}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPublisher;