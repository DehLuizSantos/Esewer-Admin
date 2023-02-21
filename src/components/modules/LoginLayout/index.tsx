import React from 'react';
import * as S from './styles';

const LoginLayout: React.FC = ({ children }) => {
  return (
    <S.LoginLayoutWrapper>
      <h3>Seja bem vindo</h3>
      {children}
    </S.LoginLayoutWrapper>
  );
};

export default LoginLayout;
