import useData from "./useData";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}



const useGenres = () => useData<Genre>('/genres')

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