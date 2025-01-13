import { useQuery } from '@tanstack/react-query';

export default function useSearch(query: string) {
  const searchQuery = useQuery({
    queryKey: ['search', query.toString()],
    queryFn: fetchData,
  });
  return searchQuery;
}

const fetchData = async ({ queryKey }: { queryKey: string[] }) => {
  const apikey = process.env.REACT_APP_NINJA_API_KEY ?? 'no key';
  const res = await fetch(`https://api.api-ninjas.com/v1/city?name=${queryKey[1]}&limit=5`, {
    headers: {
      'X-Api-Key': apikey,
    },
  });
  return await res.json();
};
