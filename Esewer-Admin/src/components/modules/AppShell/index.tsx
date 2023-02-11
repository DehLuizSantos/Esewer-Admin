import { AppShell, Navbar, Header } from '@mantine/core';
import { useState } from 'react';
import HeaderBase from '../Header';
import NavBarLinks from '../Navbar.tsx';
import * as S from './styles';

export type AppShellProps = {
  children: React.ReactNode;
};

function AppShelPropvider({ children }: AppShellProps) {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbar={
        <S.NavbarContainer
          width={{ base: 300 }}
          height={500}
          p="xs"
          display={opened ? 'block' : 'none'}
        >
          {/* Navbar content */}
          <NavBarLinks />
        </S.NavbarContainer>
      }
      header={
        <S.HeaderContainer height={60}>
          <HeaderBase
            opened={opened}
            setOpened={setOpened}
            logoImage="/Logo.svg"
          />
        </S.HeaderContainer>
      }
    >
      {children}
    </AppShell>
  );
}
export default AppShelPropvider;
