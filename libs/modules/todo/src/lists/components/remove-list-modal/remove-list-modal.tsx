import { FaTrash } from 'react-icons/fa';
import { Dispatch, SetStateAction, useState } from 'react';
import { Alert } from '@nx-todo/shared/core';
import { ListsService } from '@nx-todo/shared/services';
import { ListsModel } from '@nx-todo/shared/domain-types';
import { ConfirmModal, ConfirmModalProps, ModalProps } from '@nx-todo/shared/components';

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'> & {
  name?: string;
  id?: string;
  setData: Dispatch<SetStateAction<ListsModel[]>>;
};

export const RemoveListModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  name,
  id,
  setData,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSuccess = async () => {
    if (id) {
      setIsLoading(true)

      await ListsService.remove({ id });

      Alert.callSuccess({
        title: `Item removido com sucesso!`,
        onConfirm: onRequestClose,
      });

      setIsLoading(false);

      setData((data) => data.filter((list) => list.id !== id));
    }
  }

  const onError = (error: unknown) => {
    Alert.callError({
      title: (error as Error).name,
      description: (error as Error).message,
    });
  };

  const onConfirm = async () => {
    try {
      await onSuccess();
    } catch (error) {
      onError(error);
    }
  };

  const modalConfigs: ConfirmModalProps = {
    isOpen,
    onRequestClose,
    onConfirm,
    title: 'Remoção de Lista',
    icon: FaTrash,
    size: 'sm',
    message: `Tem certeza de que deseja excluir a lista ${name}?`,
    isLoading: isLoading,
  };

  return <ConfirmModal {...modalConfigs} />;
};
