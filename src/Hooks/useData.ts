import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios";



export interface FetchResponse<T>{
    count: number;
    results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
    const [data, setData] = useState<T[]>([])
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController()
        setLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((res) => {
            setData(res.data.results)
            setLoading(false)
        })
        .catch((error) => {
            if (error instanceof CanceledError) return
            setErrorMessage(error.message)
            setLoading(false)
        })

        return ()=> controller.abort()
    }, deps? [...deps]: [])

    return {data, errorMessage, isLoading}
}

export default useData