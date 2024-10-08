import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres"
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}



const useGenres = ()=> useQuery({
    queryKey: ['genres'],
    queryFn: ()=> apiClient.get<FetchResponse<Genre>>('/genres').then(res=> res.data),
    staleTime: 1000 * 60 * 60 * 24, //24hrs x 60 mins x 60 secs x 1000 milliseconds
    initialData: {count: genres.length, results: genres} 
})

// const useGenres = () => ({data: genres, isLoading: false, errorMessage:null})

export default useGenres

//PREVIOUS CODE THAT WAS REMOVED TO MAKE THINGS CLEANER:
/*

import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios";

export interface Genre{
    id: number;
    name: string;
}

interface FetchGenresResponse{
    count: number;
    results: Genre[]
}
    const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController()
        setLoading(true)
        apiClient.get<FetchGenresResponse>('/games', {signal: controller.signal})
        .then((res) => {
            setGenres(res.data.results)
            setLoading(false)
        })
        .catch((error) => {
            if (error instanceof CanceledError) return
            setErrorMessage(error.message)
            setLoading(false)
        })

        return ()=> controller.abort()
    }, [])

    return {genres, errorMessage, isLoading}
}
*/