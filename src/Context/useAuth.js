import { useContext } from "react"
import { Appcontext } from "./Authcontext"

const useAuth = () => {
    return useContext(Appcontext);
}

export default useAuth;