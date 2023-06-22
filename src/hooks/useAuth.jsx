import { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider.jsx';
function useAuth() {
    const auth = useContext(AuthContext)
    return auth
}

export default useAuth;