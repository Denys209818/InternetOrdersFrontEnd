import { object, string, ref } from 'yup';


export const editSchema = object().shape({
  email: string().email('Не коректна E-mail').required('Поле обов\'язкове!'),
  firstName: string().required('Поле обов\'язкове!'),
  secondName: string().required('Поле обов\'язкове!'),
  phone: string().required('Поле обов\'язкове!'),
  password: string().required().min(8, 'Пароль має містити 8 символів'),
  confirmPassword: string()
  .required('Поле обов\'язкове!')
  .oneOf([ref('password')], 'Паролі мають співпадати'),
});