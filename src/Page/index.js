import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { AppContext } from "../context";
import Modal from "../Modal";
import styles from "./styles.module.scss";

const Header = ({ openModal }) => {
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
              <button onClick={() => openModal(true)}>Add</button>
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
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);
  return (
    <div className={styles.page}>
      <Header openModal={setIsModalOpen} />
      <main className={styles.main}>{children}</main>
      <Modal isOpen={isModalOpen}>
        <div>
          <form>
            <label htmlFor="title">Title</label>
            <input name="title" id="title" type="text" />
            <div className="buttons">
              <button type="submit">Add</button>
              <button type="button">Cancel</button>
            </div>
          </form>
        </div>
      </Modal>
      <Footer />
    </div>
  );
};

export default Page;
