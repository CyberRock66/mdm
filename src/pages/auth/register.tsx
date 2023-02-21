import { Registration } from '@/features/auth';
import { BaseLayout } from '@/layouts';

export const RegisterPage = () => (
  <BaseLayout>
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="/auth/login">Have an account?</a>
            </p>

            {/* <ul className="error-messages">
              <li>That email is already taken</li>
            </ul> */}

            <Registration />
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
);

export default RegisterPage;
