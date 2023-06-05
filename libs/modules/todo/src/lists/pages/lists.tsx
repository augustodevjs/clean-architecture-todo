import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@todo/shared/assets';
import { Button } from '@todo/shared/components';
import { ListsService } from '@todo/shared/services';
import { Alert, Cache, useAuth, useModal } from '@todo/shared/core';
import {
  ContaUsuario,
  ListsFormModel,
  ListsModel,
} from '@todo/shared/domain-types';
import {
  AddListModal,
  EditListModal,
  RemoveListModal,
  Table,
} from '../components';
import * as S from './lists.styles';

export const Lists = () => {
  const [data, setData] = useState<ListsModel[]>([]);
  const [selectedList, setSelectedList] = useState<ListsModel>();

  const navigate = useNavigate();
  const { getCurrentAccount } = useAuth();
  const account = getCurrentAccount<ContaUsuario>();

  const [isRemoveModalOpen, openRemoveModal, closeRemoveModal] = useModal();
  const [isEditModalOpen, openEditModal, closeEditModal] = useModal();
  const [isAddModalOpen, openAddModal, closeAddModal] = useModal();

  const handleRemove = (list: ListsFormModel) => {
    setSelectedList(list);
    openRemoveModal();
  };

  const handleEdit = (list: ListsFormModel) => {
    setSelectedList(list);
    openEditModal();
  };

  const onLogout = () => {
    Cache.remove({ key: 'accessToken' });
    navigate('/login');
  };

  const loadData = async () => {
    try {
      const response = await ListsService.getAll();
      setData(response);
    } catch (error) {
      Alert.callError({
        title: (error as Error).name,
        description: (error as Error).message,
      });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Content>
          <img src={Logo} alt="" />
          <p>Seja bem vindo, {account?.name}!</p>
        </S.Content>

        <S.ButtonGroup>
          <Button onClick={openAddModal}>Nova Tarefa</Button>
          <Button onClick={onLogout} className="oi">
            Logout
          </Button>
        </S.ButtonGroup>
      </S.Header>

      {data.length !== 0 ? (
        <S.Tasks>
          <ul>
            {data.map((data) => (
              <Table
                key={data.id}
                text={data.name}
                onDelete={() => handleRemove(data)}
                onEdit={() => handleEdit(data)}
              />
            ))}
          </ul>
        </S.Tasks>
      ) : (
        <S.NoData>Não há registros para exibir</S.NoData>
      )}

      <AddListModal
        setData={setData}
        isOpen={isAddModalOpen}
        onRequestClose={closeAddModal}
      />

      <EditListModal
        setData={setData}
        id={selectedList?.id}
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
      />

      <RemoveListModal
        id={selectedList?.id}
        setData={setData}
        name={selectedList?.name}
        isOpen={isRemoveModalOpen}
        onRequestClose={closeRemoveModal}
      />
    </S.Container>
  );
};
