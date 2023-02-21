import Head from 'next/head';
import React from 'react';
import * as S from './styles';

export const Login: React.FC = () => {
  return (
    <S.LoginContainer>
      <Head>
        <title>EsSolutions Admin</title>
        <meta name="description" content="EsSolutions Admin" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <p>André é foda</p>
    </S.LoginContainer>
  );
};
