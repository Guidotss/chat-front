import { Message } from "./message";

export interface Chat { 
    id: string; 
    name: string; 
    chatUsers: string[]; 
    messages: Message[];
}