import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 30px;
    border-radius: 8px;
    background: #fff;
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

export const Menu = styled.section`
    display: flex;
    margin: 15px 0;
    padding: 0px;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: solid 1px #ddd;

    button {
        margin: 0px 5px;
        margin-bottom: 10px;
        padding: 10px;
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

export const Content = styled.div``;
