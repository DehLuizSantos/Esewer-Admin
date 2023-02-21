import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
  position: relative;
  top: 180px;
  z-index: 1;
`;

export const LoginWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  `}
`;

export const BeWelcomeWrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    ${theme.responsive.laptop(css`
      display: block;
    `)}
  `}
`;
