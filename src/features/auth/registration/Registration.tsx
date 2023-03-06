import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegistrationMutation } from './Registration.api';
import { IRegistration } from './Registration.model';
import { registrationFormSchema } from './Registration.schema';

export const Registration = () => {
  const [registrationRequest, { isLoading }] = useRegistrationMutation();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<IRegistration>({
    resolver: yupResolver(registrationFormSchema),
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<IRegistration> = async (formData) => {
    await registrationRequest({ ...formData })
      .unwrap()
      .then(() => reset())
      .catch((e) => {
        const errorsValue = e.data.errors;

        if (errorsValue.username) {
          setError('user.username', {
            type: 'server',
            message: `username ${errorsValue.username}`,
          });
        }
        if (errorsValue.email) {
          setError('user.email', {
            type: 'server',
            message: `email ${errorsValue.email}`,
          });
        }

        if (errorsValue.password) {
          setError('user.password', {
            type: 'server',
            message: `password ${errorsValue.password}`,
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.user && (
        <ul className="error-messages">
          <li>
            {errors.user?.username?.message ||
              errors.user?.email?.message ||
              errors.user?.password?.message}
          </li>
        </ul>
      )}

      <fieldset className="form-group">
        <input
          disabled={isLoading}
          className="form-control form-control-lg"
          type="text"
          placeholder="Your Name"
          {...register('user.username')}
        />
      </fieldset>
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
        Sign up
      </button>
    </form>
  );
};
