import { useAuth as useAuthContext } from '../context/AuthContext';

export const useAuth = () => {
    const { user, token, login, logout } = useAuthContext();
    return { user, token, login, logout };
};