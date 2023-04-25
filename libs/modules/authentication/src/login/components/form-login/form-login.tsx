import { ClipLoader } from 'react-spinners';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { LoginFormModel } from '@todo/shared/domain-types';
import { Button, TextInput } from '@todo/shared/components';
import * as S from './form-login.styles';

type Props = {
  isLoading: boolean;
  onSubmit: SubmitHandler<LoginFormModel>;
};

export const FormLogin: React.FC<Props> = ({ isLoading, onSubmit }) => {
  const { handleSubmit, register, formState } = useFormContext<LoginFormModel>();

  return (
    <S.Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <h2>Autenticação</h2>
      <TextInput
        type="text"
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
      <Button type="submit" disabled={!formState.isValid}>
        {isLoading ? (
          <S.ContainerLoading>
            <ClipLoader color="#fff" loading size={18} speedMultiplier={1} />
          </S.ContainerLoading>
        ) : (
          'Entrar'
        )}
      </Button>
    </S.Form>
  );
};
