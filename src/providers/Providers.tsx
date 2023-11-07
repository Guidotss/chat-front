import { AuthProvider } from "@/context/auth";
import { ChatProvider } from "@/context/chat";
import { type FC } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <ChatProvider>{children}</ChatProvider>
    </AuthProvider>
  );
};
