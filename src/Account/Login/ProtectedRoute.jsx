import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function ProtectedRoute({ children }) {
    const user = sessionStorage.user;
    const navigate = useNavigate();
    const isAuthen = user != null;
    useEffect(() => {
        console.log(user);
        if (!isAuthen) {
            navigate('/login');
        }
    }, [isAuthen, navigate]);

    return children;
}

export default ProtectedRoute;
