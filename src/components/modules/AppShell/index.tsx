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

  const links = [
    {
      link: 'Dashboard',
      href: 'dashboard',
      icon: '/icons/Dashboard.svg',
    },
    {
      link: 'Produtos',
      href: 'produtos',
      icon: '/icons/Dashboard.svg',
    },
    {
      link: 'Clientes',
      href: 'clientes',
      icon: '/icons/Dashboard.svg',
    },
    {
      link: 'Notas Fiscais',
      href: 'exemplo',
      icon: '/icons/Dashboard.svg',
    },
  ];

  return (
    <AppShell
      navbar={
        <S.NavbarContainer
          width={{ base: 300 }}
          height={'100vh'}
          p="xs"
          display={opened ? 'block' : 'none'}
        >
          <NavBarLinks links={links} />
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
