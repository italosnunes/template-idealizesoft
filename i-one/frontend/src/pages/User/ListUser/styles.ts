import styled from 'styled-components';

export const Container = styled.div`
    overflow-x: auto;

    table {
        width: 100%;
        border-spacing: 0px;
    }

    th,
    td {
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    button {
        width: 30px;
        height: 30px;
        color: #222;
    }

    table thead tr {
        background: #222;
        border: solid 1px #222;

        td {
            padding: 10px;
            height: 32px;
            color: #f2f2f2;
            font-weight: bold;
            font-size: 14px;
        }
    }

    table tbody tr {
        td {
            height: 32px;
            padding: 10px;
            color: #333;
            bakground: yellow;
        }
    }

    tbody tr:hover {
        background-color: #f5f5f5;
    }
`;
