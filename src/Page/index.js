import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { FaFire } from "react-icons/fa";
const Header = () => {
  return (
    <div className={styles.header}>
      <header>
        <nav>
          <ul>
            <li>
              <FaFire />
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <button>Add</button>
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
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Page;
