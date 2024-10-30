import { object, string } from 'yup';

export const registerSchema = object({
  email: string().email().required(),
  firstName: string().required(),
  secondName: string().required(),
  password: string().required().min(6),
});