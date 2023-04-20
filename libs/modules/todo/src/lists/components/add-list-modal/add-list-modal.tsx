import { FaPlus } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch, SetStateAction, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ListsService } from '@nx-todo/shared/services';
import { Alert, ValidationError } from '@nx-todo/shared/core';
import { Button, Modal, ModalProps } from '@nx-todo/shared/components';
import { ListsFormModel, ListsModel, listFormValidation } from '@nx-todo/shared/domain-types';
import { ListForm } from '../../components';
import * as S from './add-list-modal.styles'

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'> & {
  setData: Dispatch<SetStateAction<ListsModel[]>>;
};

export const AddListModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  setData,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ListsFormModel>({
    mode: 'onChange',
    resolver: yupResolver(listFormValidation),
  });

  const submitButton = (
    <Button
      type="submit"
      disabled={!form.formState.isValid}
      form="add-form-input"
      variant="primary"
    >
      {isLoading ? (
        <S.ContainerLoading>
          <ClipLoader color="#fff" loading size={18} speedMultiplier={1} />
        </S.ContainerLoading>
      ) : (
        'Salvar'
      )}
    </Button>
  );

  const onSuccess = async (data: ListsFormModel) => {
    const response = await ListsService.add({ data });

    Alert.callSuccess({
      title: 'Item cadastrado',
      onConfirm: onRequestClose,
    });

    setIsLoading(false);

    form.reset();
    setData((prevData) => [...prevData, response]);
  }

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


  const onSubmit: SubmitHandler<ListsFormModel> = async (data) => {
    setIsLoading(true);

    try {
      await onSuccess(data)
    } catch (error) {
      onError(error)
    }
  };

  const modalConfigs: ModalProps = {
    size: 'sm',
    isOpen,
    icon: FaPlus,
    onRequestClose,
    title: 'Cadastro de Lista',
    actions: [submitButton],
  };

  return (
    <Modal {...modalConfigs}>
      <FormProvider {...form}>
        <ListForm id="add-form-input" onSubmit={onSubmit} />
      </FormProvider>
    </Modal>
  );
};
