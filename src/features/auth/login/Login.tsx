import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from './Login.api';
import { ILogin } from './Login.model';
import { loginFormSchema } from './Login.schema';

export const Login = () => {
  const [registrationRequest] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginFormSchema),
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<ILogin> = async (formData) => {
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
        Sign in
      </button>
    </form>
  );
};
