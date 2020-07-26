import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
    token: string;
    user: object;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>;
    signInCompany(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Idealizesoft:token');
        const user = localStorage.getItem('@Idealizesoft:user');

        if (token && user) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    const signInCompany = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions/company', {
            email,
            password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@Idealizesoft:token', token);
        localStorage.setItem('@Idealizesoft:user', JSON.stringify(user));

        setData({ token, user });
    }, []);

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@GoBarber:token', token);
        localStorage.setItem('@GoBarber:user', JSON.stringify(user));

        setData({ token, user });
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@GoBarber:token');
        localStorage.removeItem('@GoBarber:user');

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user: data.user,
                signIn,
                signOut,
                signInCompany,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };
