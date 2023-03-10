import Head from 'next/head';
import { Wrapper } from './styles';

export const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>EsSolutions Admin</title>
        <meta name="description" content="EsSolutions Admin" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <p>Home</p>
    </Wrapper>
  );
};
