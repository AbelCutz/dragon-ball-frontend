import logoZ from "../../images/logoZ.svg";
import "./Header.css";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ handleGetDragonBall, handleMainPage }) => {
  const handleSearchSubmit = (value) => {
    const id = value.toLowerCase();
    handleGetDragonBall(id);
  };

  const handleRandom = () => {
    const randomBall = Math.random();
    const randomNum = Math.floor(randomBall * 1009) + 1;
    handleGetDragonBall(randomNum);
  };

  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoZ}
        alt="dragonballz log"
        onClick={handleMainPage}
      />
      <div className="header__container">
        <Nav handleRandom={handleRandom} handleMainPage={handleMainPage} />
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
      </div>
    </header>
  );
};

export default Header;
