import { useState, useEffect } from "react";
import useToken from "./useToken";

function useUser() {
 const [token, setToken] = useToken();

 function getPayloadFromToken(token: string): any  {
    const encodedPayload = token.split(".")[1];
    return JSON.parse(atob(encodedPayload));
 }

 const [user, setUser] = useState(() => {
    if (!token) return null;
    return getPayloadFromToken(token);
 })

 useEffect(() => {
    if (!token) {
        setUser(null)
    } else {
        setUser(getPayloadFromToken(token))
    }
 }, [token]);

 return user
}

export default useUser;