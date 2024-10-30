import { object, string } from 'yup';

export const registerSchema = object().shape({
  email: string().email('Не коректна E-mail').required('Поле обов\'язкове!'),
  firstName: string().required('Поле обов\'язкове!'),
  secondName: string().required('Поле обов\'язкове!'),
  password: string().required().min(6, 'Пароль має містити 6 символів'),
});