import styled from 'styled-components';

export const Container = styled.div`
    a {
        text-decoration: none;
        display: flex;
        padding: 10px 0;
        align-items: center;
        border-left: solid 4px transparent;

        :hover {
            border-left: solid 2px #fff;

            small {
                color: #fff;
            }
        }

        div {
            display: flex;
            align-items: center;
            width: 90%;

            svg {
                margin: 0 12px;
            }

            small {
                color: #ddd;
                font-size: 16px;
            }
        }
    }

    .submenu {
        width: 250px;
        display: flex;
        justify-content: space-around;

        svg {
            margin-left: 30px;
        }

        small {
            font-size: 13px;
        }
    }
`;
