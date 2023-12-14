import { useState } from "react";
import axios from "axios";
import { useGlobalState } from "../Context/context";

const usePing = () => {
  const { API_URL } = useGlobalState();
  const [isLoading, setIsLoading] = useState(false);

  const ping = async (url, data) => {
    try {
      setIsLoading(true);
      const response = await axios.get(API_URL + url, {
        headers:{
          Authorization: `Bearer ${data}`
        },
      });
      if (response.status === 200) {  
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error("Unauthorized.");
    } finally {
      setIsLoading(false);
    }
  };

  return { ping, isLoading };
};

export default usePing;