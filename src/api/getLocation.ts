import { useQuery } from '@tanstack/react-query';

export default function useLocation() {
  const locationQuery = useQuery({
    queryKey: ['location'],
    queryFn: fetchData,
  });
  return locationQuery;
}

const fetchData = async () => {
  const apikey = process.env.REACT_APP_GEO_API_KEY ?? 'no key';
  const res = await fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${apikey}`);
  return await res.json();
};
