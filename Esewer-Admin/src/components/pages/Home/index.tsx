import { Title } from '@/components/atomos/Title';
import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { Wrapper } from './styles';

export const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>Next.js Boilerplate</title>
        <meta
          name="description"
          content="Next App boilerplate, typescript + eslint + prettier + editorconfig + jest + styled-components"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Home</p>
    </Wrapper>
  );
};
