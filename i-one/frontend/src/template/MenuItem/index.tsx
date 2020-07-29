import React from 'react';

import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface Props {
    path: string;
    label: string;
    icon?: React.ComponentType<IconBaseProps>;
    iconSize?: number;
}
const MenuItem: React.FC<Props> = ({ path, icon: Icon, label, iconSize }) => (
    <Container>
        <li>
            <a href={path}>
                {Icon && <Icon size={iconSize} color="#fff" />}
                <small>{label}</small>
            </a>
        </li>
    </Container>
);

export default MenuItem;
