// apiRequests.js
import { useQuery } from "@tanstack/react-query"
import { getCountries, getCoinsMarketData } from "@/api/apiQueries/getRequests"

// Custom hook for fetching user data
export const useCountries = () => {
    return useQuery({ queryKey: ["countries"], queryFn: getCountries })
}
