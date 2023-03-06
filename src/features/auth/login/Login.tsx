import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from './Login.api';
import { ILogin } from './Login.model';
import { loginFormSchema } from './Login.schema';

export const Login = () => {
  const [loginRequest, { isLoading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<ILogin>({
    resolver: yupResolver(loginFormSchema),
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<ILogin> = async (formData) => {
    await loginRequest({ ...formData })
      .unwrap()
      .then(() => reset())
      .catch((e) => {
        const errorsValue = e.data.errors;

        if (errorsValue) {
          setError('user', {
            type: 'server',
            message: `email or password is invalid`,
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.user && (
        <ul className="error-messages">
          <li>{errors.user?.message}</li>
        </ul>
      )}
      <fieldset className="form-group">
        <input
          disabled={isLoading}
          className="form-control form-control-lg"
          type="text"
          placeholder="Email"
          {...register('user.email')}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          disabled={isLoading}
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          {...register('user.password')}
        />
      </fieldset>
      <button
        disabled={isLoading}
        type="submit"
        className="btn btn-lg btn-primary pull-xs-right"
      >
        Sign in
      </button>
    </form>
  );
};
