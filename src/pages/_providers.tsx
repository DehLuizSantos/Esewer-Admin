import AppShelPropvider from '@/components/modules/AppShell';
import React from 'react';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

type ProviderProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppShelPropvider>{children}</AppShelPropvider>
    </ThemeProvider>
  );
};
export default Providers;
