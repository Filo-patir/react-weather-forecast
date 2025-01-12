import React from "react";
import useSearch from "../api/getLocation.ts";

type Props = {
    searchQuery: string
    onClick: {
        (lat?: number, lon?: number): void
    }
}

type Suggestion = {
    name: string,
    country: string,
    lon: number,
    lat: number
}

export default function SearchSuggestions({ searchQuery, onClick }: Props) {
    const search = useSearch(searchQuery)
    if (search?.isPending)
        return (
            <div className="absolute top-[4.2rem] right-52 bg-slate-200 rounded-full w-[25rem] flex items-center justify-center">
                <p>Loading</p>
            </div>
        )
    else if (search?.isError) {
        alert("Error" + search.error.message)
        return
    }
    else {
        return (
            <div className="absolute top-[4.2rem] left-[20%] bg-light-gray border-2 border-black rounded-lg w-1/2 flex items-center justify-center">
                <menu>
                    {
                        search?.data?.length === 0 ? <p>No results found</p> :
                            search?.data?.map((item: Suggestion) => {
                                return (
                                    <li key={item.lat + item.lon}><button className="hover:opacity-60" onClick={() => {
                                        onClick(item.lat, item.lon)
                                    }}>{item.name}, {item.country}</button></li>
                                )
                            })
                    }
                </menu>
            </div>
        )
    }
}