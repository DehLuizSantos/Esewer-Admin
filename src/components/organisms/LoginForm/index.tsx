import Image from 'next/image';
import React from 'react';
import * as S from './styles';
import { useForm } from '@mantine/form';
import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { ParagraphSmall } from '@/styles/fonts';

const LoginForm: React.FC = () => {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    <S.LoginFormWrapper>
      <Image src="/Logo.svg" alt="Logo EsSolutions" width={133} height={49} />
      <form onSubmit={form.onSubmit(values => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <TextInput
          withAsterisk
          label="password"
          placeholder="******"
          {...form.getInputProps('password')}
        />

        <Checkbox
          mt="md"
          label="Aceito os termos"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button fullWidth type="submit">
            Login
          </Button>
        </Group>
      </form>

      <S.SignupWrapper>
        <ParagraphSmall color="#495057">Não possui conta?</ParagraphSmall>
        <a href="">Cadastre-se</a>
      </S.SignupWrapper>
    </S.LoginFormWrapper>
  );
};

export default LoginForm;
