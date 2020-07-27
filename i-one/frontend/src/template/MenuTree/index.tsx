/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { IconBaseProps } from 'react-icons';

interface Props {
    label: string;
    icon?: React.ComponentType<IconBaseProps>;
}
const MenuTree: React.FC<Props> = ({ label, icon: Icon }) => (
    <li>
        <a href="">
            {Icon && <Icon size={20} />}
            {label}
            <h2>Aqui sera seta para informar se o menu tá expandido</h2>
        </a>
        <ul>
            <h3>aqui sera props.children</h3>
        </ul>
    </li>
);

export default MenuTree;
