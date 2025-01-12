import { useQuery } from '@tanstack/react-query'

export default function useSearch(query: string) {
    const searchQuery = useQuery({
        queryKey: ["search", query.toString()],
        queryFn: fetchData
    })
    return searchQuery
}

const fetchData = async ({ queryKey }: any) => {
    const apikey = process.env.REACT_APP_WEATHER_API_KEY ?? "no key";
    const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${queryKey[1]}&limit=5&appid=${apikey}`)
    return await res.json()
}