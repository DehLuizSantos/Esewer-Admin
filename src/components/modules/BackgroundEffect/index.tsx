import React from 'react';
import * as S from './styles';

const BackgroundEffect: React.FC = ({ children }) => {
  return (
    <S.BackgroundEffectWrapper>
      {children}
      <S.BackgroundGray1>
        <S.BackgroundGray2>
          <S.BackgroundGray3 />
        </S.BackgroundGray2>
      </S.BackgroundGray1>
    </S.BackgroundEffectWrapper>
  );
};

export default BackgroundEffect;
