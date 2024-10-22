import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User, UserCredential } from "firebase/auth";
import {createContext, ReactNode, useContext, useEffect, useState } from "react";
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

const AuthContext = createContext<AuthContextType>({ register, logout, login });

type AuthContextType = {
    register: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
    login: (email: string, password: string) => Promise<UserCredential>;
    user?: User | null;
}

export const useAuth = () => useContext<AuthContextType>(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
    // create access to logged in user
    const [user, setUser] = useState(auth.currentUser);

    // subscribe to changes in state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null); // if user is logged out state is set to null
            }
        });
        return () => unsubscribe();
    }, [])

    return <AuthContext.Provider value={{ user, register, logout, login }}>{children}</AuthContext.Provider>;
}