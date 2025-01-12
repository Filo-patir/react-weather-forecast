import { useQuery } from "@tanstack/react-query"

type Props = {
    key: string
    lat: number;
    lon: number;
}

export default function useWeatherData({ key, lat, lon }: Props) {
    const weather = useQuery({
        queryKey: [key, lat.toString(), lon.toString()],
        queryFn: fetchData
    })
    return weather
}

const fetchData = async ({ queryKey } : { queryKey: string[] }) => {
    const apikey = process.env.REACT_APP_WEATHER_API_KEY ?? "no key";
    const params = new URLSearchParams();
    params.append("appid", apikey);
    params.append("units", "metric");
    params.append("lat", queryKey[1]);
    params.append("lon", queryKey[2]);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/${queryKey[0]}?${params}`)
    return response.json();
}