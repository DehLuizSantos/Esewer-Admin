import styled, { css } from 'styled-components';

export const NavbarLinksContainer = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 46px;
    gap: 10px;

    div {
      margin-left: 5px;
      border-radius: 2px;
      padding: 5px;
    }

    .Dashboard {
      background-color: ${theme.colors.blue['0']};
    }
    .Produtos {
      background-color: ${theme.colors.blue['0']};
    }
    .Clientes {
      background-color: ${theme.colors.blue['0']};
    }
    .Notas {
      background-color: ${theme.colors.blue['0']};
    }

    :hover {
      background-color: ${theme.colors.gray['4']};
    }
  `}
`;
