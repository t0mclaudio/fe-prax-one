import { NavLink } from "react-router-dom";
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <header>
        <nav>
          <ul>
            <li>TODO</li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <p>&copy; 2021 TODO</p>
      </footer>
    </div>
  );
};

const Page = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Page;
