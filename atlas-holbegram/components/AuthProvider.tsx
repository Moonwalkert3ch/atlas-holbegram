import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import {createContext, ReactNode, useContext } from "react";
import { auth } from "../firebaseConfig";

function register(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// handle clearing upon signing out
function logout() {
    return auth.signOut();
}

// handle logging in 
function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

const AuthContext = createContext({ register, logout, login });

type AuthContextType = {
    register: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
    login: (email: string, password: string) => Promise<UserCredential>;
}

export const useAuth = () => useContext<AuthContextType>(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
    return <AuthContext.Provider value={{ register, logout, login }}>{children}</AuthContext.Provider>;
}