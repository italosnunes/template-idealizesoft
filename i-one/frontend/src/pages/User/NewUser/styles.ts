import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
    width: 100%;
    border: solid 1px #660066;
    border-radius: 4px;
    box-shadow: 1px 1px 2px #000;
`;

export const MenuButton = styled.footer`
    display: flex;
    flex-direction: row;
    width: 20%;

    button {
        max-width: 150px;
        height: 50px;
        margin-right: 10px;
    }
`;
