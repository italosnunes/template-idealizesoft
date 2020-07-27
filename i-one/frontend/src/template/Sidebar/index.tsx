import React from 'react';

import Menu from '../Menu';

import { Container } from './styles';

const SideBar: React.FC = () => (
    <Container>
        <aside>
            <section>
                <Menu />
            </section>
        </aside>
    </Container>
);

export default SideBar;
