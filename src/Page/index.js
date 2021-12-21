import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <ul>
            <li>TODO</li>
            <li>
              <NavLink>Home</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
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
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Page;
