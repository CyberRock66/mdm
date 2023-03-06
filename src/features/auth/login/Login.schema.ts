import * as yup from 'yup';

export const loginFormSchema = yup.object({
  user: yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email field is required'),
    password: yup
      .string()
      .max(30, 'Must be 30 characters or less')
      .required('password field is required'),
  }),
});
