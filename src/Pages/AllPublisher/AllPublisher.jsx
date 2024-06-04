import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const AllPublisher = () => {
    const axiosSecure = useAxiosSecure()

    const { data: allPublisher = [] } = useQuery({
        queryKey: ["adminPublisher"],
        queryFn: async () => {
            const res = await axiosSecure.get("/adminPublisher")
            return res.data
        }

    })
    // console.log(allPublisher);
    return (
        <div>
            <h1 className="text-4xl border-l-8 border-indigo-500">All Publisher</h1>
            <div className="grid grid-cols-3 gap-6">
                {allPublisher.map((publisher, index) => (
                    <div key={index}>
                        <img
                            alt=""
                            src={publisher.image}
                            className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                        />

                        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                            <strong className="font-medium">Branding Name</strong>

                            <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                            <p className="mt-0.5 opacity-50 sm:mt-0">{publisher.publisher}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPublisher;