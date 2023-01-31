import { useRouter } from 'next/router';
import Link from 'next/link';

export const Header = () => {
  const router = useRouter();

  return (
    <header>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link
                className={
                  router.pathname === '/' ? 'nav-link active' : 'nav-link'
                }
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {' '}
                <i className="ion-compose" />
                &nbsp;New Article{' '}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {' '}
                <i className="ion-gear-a" />
                &nbsp;Settings{' '}
              </a>
            </li>
            <li className="nav-item">
              <Link
                className={
                  router.pathname === '/auth/login'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                href="/auth/login"
              >
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  router.pathname === '/auth/register'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                href="/auth/register"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
