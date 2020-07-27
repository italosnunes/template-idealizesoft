import React from 'react';

import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface Props {
    path: string;
    label: string;
    icon?: React.ComponentType<IconBaseProps>;
}
const MenuItem: React.FC<Props> = ({ path, icon: Icon, label }) => (
    <Container>
        <li>
            <a href={path}>
                {Icon && <Icon size={20} />}
                <small>{label}</small>
            </a>
        </li>
    </Container>
);

export default MenuItem;
