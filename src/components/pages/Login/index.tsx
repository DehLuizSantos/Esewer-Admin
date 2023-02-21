import LoginForm from '@/components/organisms/LoginForm';
import { ParagraphBig, TitleH1 } from '@/styles/fonts';
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

      <S.LoginWrapper>
        <S.BeWelcomeWrapper>
          <TitleH1 color="#4C6EF5">Seja Bem vindo</TitleH1>
          <ParagraphBig color="#495057">
            Entre com suas credenciais
          </ParagraphBig>
        </S.BeWelcomeWrapper>
        <LoginForm />
      </S.LoginWrapper>
    </S.LoginContainer>
  );
};
