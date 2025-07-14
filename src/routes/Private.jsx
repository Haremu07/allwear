import { useCart } from '../global/CartContext'
import { Navigate } from 'react-router-dom'

const Private = ({ children }) => {
    const { isLoggedIn  } = useCart()
    
    return isLoggedIn  ? children : <Navigate to="/login" replace />;

}

export default Private