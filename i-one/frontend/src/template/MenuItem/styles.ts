import styled from 'styled-components';

export const Container = styled.div`
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-left: solid 4px transparent;

        :hover {
            border-left: solid 2px #fff;

            small {
                color: #fff;
            }
        }

        svg {
            margin: 0 12px;
        }

        small {
            color: #ddd;
            font-size: 16px;
        }
    }
`;
