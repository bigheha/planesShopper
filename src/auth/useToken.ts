import { useState } from "react";

function useToken() : [string, fn:(a: string) => void] {
    const [token, setTokenInternal] = useState(() => {
        return localStorage.getItem("token") || ""
    })

    function setToken(newToken: string) {
        localStorage.setItem("token", newToken);
        setTokenInternal(newToken);
    }

    return [token, setToken]
}

export default useToken