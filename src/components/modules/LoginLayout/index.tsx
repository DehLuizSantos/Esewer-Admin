import React from 'react';
import BackgroundEffect from '../BackgroundEffect';
import * as S from './styles';

const LoginLayout: React.FC = ({ children }) => {
  return (
    <S.LoginLayoutWrapper>
      <BackgroundEffect>{children}</BackgroundEffect>
    </S.LoginLayoutWrapper>
  );
};

export default LoginLayout;
