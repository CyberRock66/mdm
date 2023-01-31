import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <a href="/" className="logo-font">
        conduit
      </a>
      <span className="attribution">
        An interactive learning project from{' '}
        <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
        under MIT.
      </span>
    </div>
  </footer>
);
