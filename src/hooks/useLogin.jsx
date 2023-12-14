import { useState } from "react";
import axios from "axios";
import { useGlobalState } from "../Context/context";

const useLogin = () => {
  const { API_URL, setLoggedUser } = useGlobalState();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    try {
      setIsLoading(true);

      const response = await axios.post(API_URL + "/auth/login", {
        email,
        password,
      });
      
      if (response.status === 200) {  
        // Store the token in local storage
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user))
        setLoggedUser(response.data.data.user);
        return true;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      throw new Error("An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};

export default useLogin;