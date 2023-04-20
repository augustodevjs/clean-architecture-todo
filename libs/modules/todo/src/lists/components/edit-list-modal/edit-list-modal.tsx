import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import { FormProvider, useForm } from 'react-hook-form';
import { ListsService } from '@nx-todo/shared/services';
import { Alert, ValidationError } from '@nx-todo/shared/core';
import { Button, Modal, ModalProps } from '@nx-todo/shared/components';
import { ListsFormModel, ListsModel } from '@nx-todo/shared/domain-types';
import { ListForm } from '../../components';
import * as S from './edit-list-modal.styles'

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'> & {
  id?: string;
  setData: Dispatch<SetStateAction<ListsModel[]>>;
};

export const EditListModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  setData,
  id,
}) => {
  const form = useForm<ListsFormModel>({
    mode: 'onChange',
  });

  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    try {
      if (id) {
        const response = await ListsService.loadById({ id });
        form.reset(response)
      }
    } catch (error) {
      Alert.callError({
        title: (error as Error).name,
        description: (error as Error).message,
      });
    }
  }

  useEffect(() => {
    loadData()
  }, [id]);

  const onSuccess = async (data: ListsFormModel) => {
    if (id) {
      const response = await ListsService.update({ data, id });

      Alert.callSuccess({
        title: 'Item atualizado com sucesso!',
        onConfirm: onRequestClose,
      });

      setIsLoading(false);

      setData((prevData) =>
        prevData.map((list) =>
          list.id === response.id ? { ...response } : list,
        ),
      );

      form.reset();
    }
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

  const onSubmit = async (data: ListsFormModel) => {
    setIsLoading(true);
    try {
      await onSuccess(data)
    } catch (error) {
      onError(error)
    }
  };

  const submitButton = (
    <Button
      type="submit"
      disabled={!form.formState.isValid}
      form="edit-list-form"
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

  const modalConfigs: ModalProps = {
    size: 'sm',
    isOpen,
    icon: FaPen,
    onRequestClose,
    title: 'Edição de Lista',
    actions: [submitButton],
  };

  return (
    <Modal {...modalConfigs}>
      <FormProvider {...form}>
        <ListForm id="edit-list-form" onSubmit={onSubmit} />
      </FormProvider>
    </Modal>
  );
};
