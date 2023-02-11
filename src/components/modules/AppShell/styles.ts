import styled, { css } from 'styled-components';
import { Header, Navbar } from '@mantine/core';

export const NavbarContainer = styled(Navbar)`
  ${({ theme }) => css`
    background: ${theme.colors.gray['2']};
    ${theme.responsive.tablet(css`
      display: block;
    `)}
  `}
`;

export const HeaderContainer = styled(Header)`
  ${({ theme }) => css`
    background: ${theme.colors.gray['2']};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;
