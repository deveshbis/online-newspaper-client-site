import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { MdOutlinePublishedWithChanges } from "react-icons/md";
import PremiumArticleCard from "./PremiumArticleCard";


const PremiumArticles = () => {
    const axiosSecure = useAxiosSecure()
    const { data: premiumArticles = [] } = useQuery({
        queryKey: ['premiumArticles'],
        queryFn: async () => {
            const res = await axiosSecure.get('/premiumArticlesShow');
            return res.data
        }
    })

    const premiumSigleArticles = premiumArticles.filter(articlePrem => articlePrem.isPremium === 'premium');

    console.log(premiumSigleArticles);
    return (
        <div className="grid justify-center grid-cols-1 gap-6">
        {premiumSigleArticles.map(premCard => (<PremiumArticleCard key={premCard._id} premCard={premCard}></PremiumArticleCard>))}
    </div>
    );
};

export default PremiumArticles;

