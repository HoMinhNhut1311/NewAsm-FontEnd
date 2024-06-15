import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function ProtectedRoute({ children }) {
    const token = sessionStorage.token;
    const navigate = useNavigate();
    const isAuthen = token != null;
    useEffect(() => {
        console.log(token);
        if (!isAuthen) {
            navigate('/login');
        }
    }, [isAuthen, navigate]);

    return children;
}

export default ProtectedRoute;
