import { object, string } from 'yup';

export const loginSchema = object().shape({
  email: string().email('Не коректна E-mail').required('Поле обов\'язкове!'),
  password: string().required('Поле обов\'язкове!').min(6, 'Пароль має містити 6 символів'),
});