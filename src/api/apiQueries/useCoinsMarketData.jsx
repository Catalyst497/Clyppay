// src/hooks/useCryptocurrencies.js
import { useQuery } from "@tanstack/react-query"
import { api } from "@/api/axiosProvider"

const fetchCoinsMarketData = async (currency, skip, limit) => {
    console.log(currency, skip, limit)

    const { data } = await api.crypto.get(
        `market-api/fetch-coins-market-data?currency=${currency}&skip=${skip}&limit=${limit}`
    );
    return data;
};

export const useCoinsMarketData  = (currency = 'usd', skip = 0, limit = 20) => {
    
    return useQuery(
        {
            queryKey: ['coinsMarketData'],
            queryFn: () => fetchCoinsMarketData(currency, skip, limit ),
            enabled: true,
            staleTime: 1000 * 60 * 60,
            cacheTime: 1000 * 60 * 60,
            keepPreviousData: true,
        }
        
        
)}
