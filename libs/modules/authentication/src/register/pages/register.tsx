import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Logo } from "@nx-todo/shared/assets";
import { TsParticle } from "@nx-todo/shared/components";
import { RegisterService } from "@nx-todo/shared/services";
import { Alert, ValidationError } from "@nx-todo/shared/core";
import { RegisterFormModel, registerFormValidation } from "@nx-todo/shared/domain-types";
import { RegisterForm } from "../components";
import * as S from "./register.styles";

export const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormModel>({
    mode: "onChange",
    resolver: yupResolver(registerFormValidation),
  });

  const onSuccess = async (data: RegisterFormModel) => {
    const register = await RegisterService.add({ data });

    Alert.callSuccess({
      title: `Usuário ${register.user.name} foi criado com sucesso!`,
      onConfirm: () => navigate("/login"),
    });

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

  const onSubmit: SubmitHandler<RegisterFormModel> = async (data) => {
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
            <RegisterForm onSubmit={onSubmit} isLoading={isLoading} />
          </FormProvider>

          <Link to="/login">Já possui uma conta?</Link>
        </S.Content>
      </S.Container>
    </>
  );
};
