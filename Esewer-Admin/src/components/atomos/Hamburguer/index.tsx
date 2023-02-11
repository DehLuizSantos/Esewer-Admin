import React, { SetStateAction, useState } from 'react';
import { HambuguerContainer } from './styles';
import { Burger } from '@mantine/core';

type HamburguerProps = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburguer: React.FC<HamburguerProps> = ({ opened, setOpened }) => {
  return (
    <HambuguerContainer>
      <Burger opened={opened} onClick={() => setOpened(o => !o)} />
    </HambuguerContainer>
  );
};

export default Hamburguer;
