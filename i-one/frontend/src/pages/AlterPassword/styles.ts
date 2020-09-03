import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import BackgroundSignInImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #440044;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 600px;

    background: #fff;
    box-shadow: 5px 5px #ddd;
    border-radius: 4px;
`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundSignInImg}) no-repeat center;
    background-size: cover;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to{
    opacity:1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromLeft} 1s;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            color: rgba(0, 0, 0, 0.7);
            margin-bottom: 24px;
        }

        a {
            color: #440044;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#440044')};
            }
        }
    }

    > a {
        color: #660066;
        margin-top: 24px;
        margin-bottom: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;
        &:hover {
            color: ${shade(0.2, '#660066')};
        }

        svg {
            margin-right: 16px;
        }
    }
`;
