import styled, { css } from 'styled-components';

export const HambuguerContainer = styled.div`
  ${({ theme }) => css`
    display: block;
    ${theme.responsive.tablet(css`
      display: none;
    `)}
  `}
`;
