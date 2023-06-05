import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Logo } from '@todo/shared/assets';
import { env } from '@todo/shared/environment';
import { AuthService } from '@todo/shared/services';
import { TsParticle } from '@todo/shared/components';
import { Alert, ValidationError, useAuth } from '@todo/shared/core';
import { LoginFormModel, loginFormValidation } from '@todo/shared/domain-types';
import { FormLogin } from '../components';
import * as S from './login.styles';

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormModel>({
    mode: 'onChange',
    resolver: yupResolver(loginFormValidation),
  });

  const { getCurrentAccount, saveAccessToken } = useAuth();

  useEffect(() => {
    if (getCurrentAccount()) {
      navigate(env.app.homepageUrl);
    }
  }, []);

  const onSuccess = async (data: LoginFormModel) => {
    const accessToken = await AuthService.login({ data });

    saveAccessToken(accessToken.accessToken);

    if (location.state !== null) {
      navigate(location.state.from.pathname);
    } else {
      navigate(env.app.homepageUrl);
    }

    setIsLoading(false);
  };

  const onError = (error: unknown) => {
    setIsLoading(false);
    form.reset();

    if (error instanceof ValidationError) {
      Alert.callError({
        title: (error as Error).name,
        description: error.errors[0],
      });
    } else {
      Alert.callError({
        title: (error as Error).name,
        description: (error as Error).message,
      });
    }
  };

  const onSubmit: SubmitHandler<LoginFormModel> = async (data) => {
    setIsLoading(true);

    try {
      await onSuccess(data);
    } catch (error) {
      onError(error);
    }
  };

  return (
    <>
      <TsParticle />
      <S.Container>
        <S.Content>
          <S.Logo>
            <img src={Logo} alt="Logo da Aplicação" />
          </S.Logo>

          <FormProvider {...form}>
            <FormLogin onSubmit={onSubmit} isLoading={isLoading} />
          </FormProvider>

          <Link to="/cadastrar-conta">Não possui uma conta?</Link>
        </S.Content>
      </S.Container>
    </>
  );
};
