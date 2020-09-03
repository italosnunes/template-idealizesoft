import React, { createContext, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import api from '../services/api';

interface AuthState {
    token: string;
    user: object;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AlterPassword {
    email: string;
    passwordOld: string;
    password: string;
    passwordConfirm: string;
}

interface AuthContextData {
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>;
    signInCompany(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    alterPassword(credentials: AlterPassword): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const history = useHistory();

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

    const alterPassword = useCallback(
        async ({ email, passwordOld, password, passwordConfirm }) => {
            await api.put('users/alter-password', {
                email,
                passwordOld,
                password,
                passwordConfirm,
            });
        },
        [],
    );
    const signIn = useCallback(
        async ({ email, password }) => {
            const response = await api.post('sessions', {
                email,
                password,
            });

            const { token, user } = response.data;

            if (user.alterPassword) {
                history.push({
                    pathname: '/alter-password',
                    state: { email: user.email },
                });
                return;
            }

            localStorage.setItem('@Idealizesoft:token', token);
            localStorage.setItem('@Idealizesoft:user', JSON.stringify(user));

            setData({ token, user });
        },
        [history],
    );

    const signOut = useCallback(() => {
        localStorage.removeItem('@Idealizesoft:token');
        localStorage.removeItem('@Idealizesoft:user');

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user: data.user,
                signIn,
                signOut,
                signInCompany,
                alterPassword,
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
