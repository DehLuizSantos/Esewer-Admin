import styled, { css } from 'styled-components';

export const BackgroundEffectWrapper = styled.div``;

export const BackgroundGray1 = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background['0']};
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    height: 100vh;
    z-index: 0;
    position: relative;
    bottom: 670px;
  `}
`;

export const BackgroundGray2 = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background['1']};
    clip-path: polygon(100% 10%, 11% 100%, 100% 100%);
    height: 100vh;
  `}
`;

export const BackgroundGray3 = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background['2']};
    clip-path: polygon(100% 26%, 25% 100%, 100% 100%);
    height: 100vh;
  `}
`;
