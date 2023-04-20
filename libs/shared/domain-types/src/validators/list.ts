import * as yup from 'yup';

export const listFormValidation = yup.object({
  name: yup.string().required('O campo é obrigatório'),
});
