
import { GameQuery } from "../App";
import useData from "./useData";




//Interface declarations

export interface Platform {
    id:number;
    name:string;
    slug: string;
}

export interface Game{
    id: number;
    name: string;
    background_image: string;
    metacritic:number;
    parent_platforms: {platform: Platform}[]
    //The parent_platform is an array of objects where each object contains a key named platform whose value is an object with the Platform shape/properties). Basically there is a neste object situation going on here. eg[{platform: {id:1, name: 'sara', slug: 'sluggish'}}, {platform: {id:2, name: "di", slug:"this"}}]
}





const useGames = (gameQuery: GameQuery)=> useData<Game>("/games", 
{
    params:{
        genres: gameQuery.genre?.id, 
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
    }
},
 [gameQuery])




export default useGames


//PREVIOUS CODE THAT WAS REMOVED TO MAKE THINGS CLEANER:
/*
    import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



//Interface declarations

export interface Platform {
    id:number;
    name:string;
    slug: string;
}

export interface Game{
    id: number;
    name: string;
    background_image: string;
    metacritic:number;
    parent_platforms: {platform: Platform}[]
    //The parent_platform is an array of objects where each object contains a key named platform whose value is an object with the Platform shape/properties). Basically there is a neste object situation going on here. eg[{platform: {id:1, name: 'sara', slug: 'sluggish'}}, {platform: {id:2, name: "di", slug:"this"}}]
}

interface FetchGamesResponse{
count:number;
results: Game[];
}



const useGames = ()=>{
    const [games, setGames] = useState<Game[]>([])
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController()
        setLoading(true)
        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
        .then((res) => {
            setGames(res.data.results)
            setLoading(false)
        })
        .catch((error) => {
            if (error instanceof CanceledError) return
            setErrorMessage(error.message)
            setLoading(false)
        })

        return ()=> controller.abort()
    }, [])

    return {games, errorMessage, isLoading}
}

 */