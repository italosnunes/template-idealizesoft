import styled from 'styled-components';

export const Container = styled.div`
    width: 96%;
`;

export const Content = styled.div`
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
        min-width: 150px;
        height: 50px;
        margin-right: 10px;
    }
`;
