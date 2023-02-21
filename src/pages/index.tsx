import AppShelPropvider from '@/components/modules/AppShell';
import { Home } from '@/components/pages/Home';

import type { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

import type { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ThemeProvider theme={theme}>
      <AppShelPropvider>{page}</AppShelPropvider>
    </ThemeProvider>
  );
};

export default HomePage;
