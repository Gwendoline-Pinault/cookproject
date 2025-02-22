import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(()=>{
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await axios.get(url);
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