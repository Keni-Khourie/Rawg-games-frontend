import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

interface Platform{
    id: number;
    name: string;
    slug: string;
}


const usePlatforms = ()=> useQuery({
    queryKey: ['platforms'],
    queryFn: ()=> apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res=> res.data),
    staleTime: 24 * 60 * 60 * 1000,
    //initialData: {count: platforms.length, results: platforms}
})
//const usePlatforms = () => useData<Platform>('/platforms/lists/parents')


export default usePlatforms