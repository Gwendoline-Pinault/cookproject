import axios from "axios";
import { RapidApiOptions, RapidApiResponse } from "../types/types";
import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<RapidApiResponse>>([]);

  const options: RapidApiOptions = {
    method: 'GET',
    url: "https://tasty.p.rapidapi.com/recipes/" + url,
    params: {
      from: '0',
      size: '20',
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
    }
  }

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await axios.request(options);
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      }
      finally {
        setIsLoading(false);
      }
    }

    fetchData();
  },[]);

  return {data, isLoading};
}