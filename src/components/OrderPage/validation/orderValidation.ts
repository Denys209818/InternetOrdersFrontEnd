import { object, string } from 'yup';

export const orderSchema = object().shape({
  firstName: string().required('Поле обов\'язкове!'),
  secondName: string().required('Поле обов\'язкове!'),
  phone: string().required('Поле обов\'язкове!'),
});