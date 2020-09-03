import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;

    background: #f2f2f2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    max-width: 700px;
    width: 100%;
    margin-top: -50px;
`;

export const Header = styled.header`
    width: 100vw;
    height: 340px;
    background: #660066;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        max-width: 700px;
        width: 100%;

        h1 {
            color: #fff;
            margin: 50px 0;
        }

        h3 {
            color: #fff;
        }
    }
`;

export const Menu = styled.div`
    max-width: 700px;
    width: 100%;
    height: 40px;
    margin: 20px 0;

    button {
        margin: 0px 5px;
        padding: 8px;
        background: #fff;
        border: solid 2px #fff;
        border-radius: 5px;
        font-size: 14px;

        color: #888;

        :hover {
            border: solid 2px #660066;
            background: #660066;
            color: #fff;
        }
    }
`;
