import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import Hamburguer from '@/components/atomos/Hamburguer';

type HeaderBaseProps = {
  logoImage: string;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderBase: React.FC<HeaderBaseProps> = ({
  logoImage,
  opened,
  setOpened,
}) => {
  return (
    <>
      <S.LogoAncor>
        <Image src={logoImage} alt="logo" width={'90px'} height={'26px'} />
      </S.LogoAncor>
      <Hamburguer opened={opened} setOpened={setOpened} />
    </>
  );
};

export default HeaderBase;
