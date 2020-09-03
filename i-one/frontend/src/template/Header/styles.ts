import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    background: #fff;

    height: 60px;
    padding: 10px 20px;
    border-bottom: solid 1px #ccc;

    div {
        margin-right: 15px;
        text-align: right;

        h5 {
            color: #333;
        }
    }

    button {
        margin: 5px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 38px;
        width: 38px;

        background: none;
        border: none;
    }
`;
