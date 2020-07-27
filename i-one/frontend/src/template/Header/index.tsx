import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => (
    <Container>
        <a href="/#/" className="logo">
            <span className="logo-mini">
                idealize
                <b>soft</b>
            </span>
            <span className="logo-lg">
                <b>Idealizesoft</b>
            </span>
        </a>
        <nav className="navbar">
            <button type="button">Toggle</button>
        </nav>
    </Container>
);

export default Header;
