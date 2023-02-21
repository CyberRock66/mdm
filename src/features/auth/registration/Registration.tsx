import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegistrationMutation } from './Registration.api';
import { IRegistration } from './Registration.model';
import { registrationFormSchema } from './Registration.schema';

export const Registration = () => {
  const [registrationRequest] = useRegistrationMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistration>({
    resolver: yupResolver(registrationFormSchema),
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<IRegistration> = async (formData) => {
    await registrationRequest({ ...formData })
      .unwrap()
      .then((res) => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Your Name"
          {...register('user.username')}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Email"
          {...register('user.email')}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          {...register('user.password')}
        />
      </fieldset>
      <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
        Sign up
      </button>
    </form>
  );
};
