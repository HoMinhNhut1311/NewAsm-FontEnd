import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {jwtDecode} from 'jwt-decode' 
function ProtectedRoute({ children, requiredRole }) {
    const token = sessionStorage.token;
    const navigate = useNavigate();
    const isAuthen = token != null;
    useEffect(() => {
        if (!isAuthen) {
            navigate('/login');
        }
        console.log("protected");
        const jwt = jwtDecode(token);
        const scope = jwt.scope.split(" "); 
            if (!scope.includes(requiredRole) && requiredRole) {
                navigate('/notHasPermission');
            }

    }, [isAuthen, navigate]);

    return children;
}

export default ProtectedRoute;
