import React from 'react';
import * as S from './styles';

const BackgroundEffect: React.FC = ({ children }) => {
  return (
    <S.BackgroundEffectWrapper>
      <S.BackgroundGray1 />
      <S.BackgroundGray2 />
      <S.BackgroundGray3 />
      {children}
    </S.BackgroundEffectWrapper>
  );
};

export default BackgroundEffect;
