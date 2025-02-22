import axios from "axios";
import { useEffect, useState } from "react";

type RapidApiOptions = {
  method: string,
  url: string,
  params: object,
  headers: {
    'x-rapidapi-key': string,
    'x-rapidapi-host': string,
  },
}

export type RapidApiCollectionResponse = {
  id: number,
  name: string,
  slug: string,
  description: string,
  thumbnail_url: string,
  cook_time_minutes: number,
  total_time_minutes: number,
  user_ratings: {score: number},
  instructions : [
    {
      
    }
  ]
}

export function useFetch(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<RapidApiCollectionResponse>>([]);

  const options: RapidApiOptions = {
    method: 'GET',
    url: url,
    params: {
      from: '0',
      size: '20',
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
    }
  };

  useEffect(()=>{
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