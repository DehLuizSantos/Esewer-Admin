import LoginLayout from '@/components/modules/LoginLayout';
import { Login } from '@/components/pages/Login';

import type { ReactElement } from 'react';

import type { NextPageWithLayout } from './_app';

const LoginPage: NextPageWithLayout = () => {
  return <Login />;
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>;
};

export default LoginPage;
