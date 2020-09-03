import React, { useCallback } from 'react';
import { FiPower } from 'react-icons/fi';
import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
    const { signOut } = useAuth();

    const handleLogout = useCallback(() => {
        signOut();
    }, [signOut]);

    return (
        <Container>
            <div>
                <h5>Idealizesoft Desenvolvimento</h5>
                <small>idealizesoft@idealizesoft.com.br</small>
            </div>
            <div>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={28} color="red" />
                </button>
            </div>
        </Container>
    );
};

export default Header;
