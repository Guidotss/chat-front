"use client"
import { Message, User } from '@/interfaces';
import { createContext } from 'react';


interface ChatContextProps {
    id: string;
    messages: Message[]; 
    users: User[]; 
    name: string; 
}


export const ChatContext = createContext({} as ChatContextProps);   