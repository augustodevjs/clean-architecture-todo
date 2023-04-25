import { ClipLoader } from 'react-spinners';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Button, TextInput } from '@todo/shared/components';
import { RegisterFormModel } from '@todo/shared/domain-types';
import * as S from './register-form.styles';

type Props = {
  isLoading: boolean;
  onSubmit: SubmitHandler<RegisterFormModel>;
};

export const RegisterForm: React.FC<Props> = ({ isLoading, onSubmit }) => {
  const { handleSubmit, formState, register } = useFormContext<RegisterFormModel>();

  return (
    <S.Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <h2>Nova Conta</h2>
      <TextInput
        type="text"
        label="Nome"
        isRequired
        placeholder="Digite o seu nome"
        error={formState.errors.name?.message}
        {...register('name')}
      />
      <TextInput
        type="email"
        label="Email"
        isRequired
        placeholder="Digite o seu email"
        error={formState.errors.email?.message}
        {...register('email')}
      />
      <TextInput
        type="password"
        label="Senha"
        isRequired
        placeholder="Digite a sua senha"
        error={formState.errors.password?.message}
        {...register('password')}
      />
      <TextInput
        type="password"
        label="Confirmação de Senha"
        isRequired
        placeholder="Repita novamente sua senha"
        error={formState.errors.passwordConfirm?.message}
        {...register('passwordConfirm')}
      />
      <Button type="submit" disabled={!formState.isValid}>
        {isLoading ? (
          <S.ContainerLoading>
            <ClipLoader color="#fff" loading size={18} speedMultiplier={1} />
          </S.ContainerLoading>
        ) : (
          'Cadastrar'
        )}
      </Button>
    </S.Form>
  );
};
