import { User } from '@/interfaces';
import { createContext } from 'react';


interface AuthContextProps {
    user: User | null; 
}


export const AuthContext = createContext({} as AuthContextProps);