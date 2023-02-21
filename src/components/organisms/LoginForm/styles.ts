import styled, { css } from 'styled-components';

export const LoginFormWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    background-color: #ffffff;
    padding: 100px;
    border-radius: 11px;

    form {
      text-align: start;
    }
  `}
`;

export const SignupWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 40px;
    a {
      color: ${theme.colors.blue['6']};
    }
  `}
`;
