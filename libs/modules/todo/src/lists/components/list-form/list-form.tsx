import { SubmitHandler, useFormContext } from 'react-hook-form';
import { TextInput } from '@todo/shared/components';
import { ListsFormModel } from '@todo/shared/domain-types';
import * as S from './list-form.styles'

type Props = {
  onSubmit: SubmitHandler<ListsFormModel>;
  id: string;
};

export const ListForm: React.FC<Props> = ({ onSubmit, id }) => {
  const { register, handleSubmit, formState } = useFormContext<ListsFormModel>();

  return (
    <S.Form autoComplete='off' onSubmit={handleSubmit(onSubmit)} id={id}>
      <TextInput
        type="text"
        label="Nome"
        isRequired
        placeholder="Digite o nome da lista"
        error={formState.errors.name?.message}
        {...register('name')}
      />
    </S.Form>
  );
};
