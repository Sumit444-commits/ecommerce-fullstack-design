import { createContext, useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";

export const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const Api = import.meta.env.VITE_BASE_URI;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const AutherizationWithToken = `Bearer ${token}`;
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const storeTokenInLS = (usertoken) => {
    setToken(usertoken);
    localStorage.setItem("token", usertoken);
  };

  const isLoggedIn = !!token;

  const isAuthenticated = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${Api}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: AutherizationWithToken,
        },
      });

      const res_data = await response.json();
      if (res_data.data == "Token expired") {
        if (isLoggedIn) {
          logoutUser();
        }
      }
      if (response.ok) {
        setUser(res_data);
      }
    } catch (error) {
      console.error("Error Fetching user", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutUser = () => {
    setToken("");
    setUser("");
    localStorage.removeItem("token");
  };

  const userDataUpdate = async (updatedData) => {
    // console.log("new",updatedData);

    try {
      const response = await fetch(`${Api}/api/auth/user/update`, {
        method: "PATCH",
        headers: {
          Authorization: AutherizationWithToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      // const res_data = await response.json()
      // console.log("res",res_data);
      if (response.ok) {
        toast.success("Data updated Successfully");
        isAuthenticated();
        return true;
      }
    } catch (error) {
      console.error("Error in Editing User Data: ", error);
    }
  };

  useEffect(() => {
    if (token || isLoggedIn) {
      isAuthenticated();
    }
  }, [token, isLoggedIn]);

  return (
    <StoreContext.Provider
      value={{
        Api,
        storeTokenInLS,
        isLoggedIn,
        logoutUser,
        user,
        userDataUpdate,
        data,
        isAuthenticated,

        isLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
