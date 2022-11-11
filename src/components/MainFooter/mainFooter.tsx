import Logo from '../Logo/logo';

import './mainFooter.css';

const displayYear = () => {
  const year = new Date().getFullYear();
  return year;
};

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <Logo />
      <small className="main-footer-author">
        <span className="main-footer-copyright">©</span> {displayYear()} Toki
        Urata
      </small>
    </footer>
  );
};

export default MainFooter;
