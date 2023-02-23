import { Login } from '@/features/auth';
import { BaseLayout } from '@/layouts';

export const LoginPage = () => (
  <BaseLayout>
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/auth/register"> Need an account?</a>
            </p>

            <Login />
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
);

export default LoginPage;
