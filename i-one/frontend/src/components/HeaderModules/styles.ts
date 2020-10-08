import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-radius: 8px;
    background: #fff;
    padding-bottom: 8px;

    nav {
        display: flex;
        justify-content: flex-end;
        margin-top: 8px;
    }
`;

export const Title = styled.header`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: solid 1px #ccc;

    h1 {
        margin-left: 10px;
        color: rgba(0, 0, 0, 0.9);
    }

    h3 {
        margin-left: 5px;
        margin-top: 3px;
    }
`;
