import LoginLayout from '@/components/modules/LoginLayout';
import { Login } from '@/components/pages/Login';
import type { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import type { NextPageWithLayout } from './_app';

const LoginPage: NextPageWithLayout = () => {
  return <Login />;
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ThemeProvider theme={theme}>
      <LoginLayout>{page}</LoginLayout>
    </ThemeProvider>
  );
};

export default LoginPage;
