import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { Container } from './styles';

const Header: React.FC = () => (
    <Container>
        <FiCheckCircle size={20} color="#660066" />
        <h2>Colaboradores</h2>
    </Container>
);

export default Header;
