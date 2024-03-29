import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #f3f3f3;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #f3f3f3;
  color: #666360;

  display:flex;
  align-items:center;

    & + div {
      margin-top: 8px;
    }

    ${props =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${props =>
        props.isFocused &&
        css`
            color: #660066;
            border-color: #660066;
        `}

    ${props =>
        props.isFilled &&
        css`
            color: #660066;
        `}


    input {
      flex:1;
      background: transparent;
      border:0;
      color: #666360;

      & ::placeholder {
        color: #666360;
      }
    }

    svg{
      margin-right:16px;
    }
`;

export const Error = styled(Tooltip)`
    margin-left: 16px;
    height: 20px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
