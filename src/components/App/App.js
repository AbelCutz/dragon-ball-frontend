import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import { IsLoadingContext } from "../../contexts/IsLoadingContext";
import { CurrentZContext } from "../../contexts/CurrentZContext";
import { useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getAllCharacters } from "../../utils/api";

function App() {
  const [dragonBall, setDragonBall] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleGetDragonBall = (characters) => {
    setLoading(true);
    navigate(`/card/${characters}`);
    getAllCharacters(characters)
      .then((res) => {
        console.log("Characters data received:", res);
        setDragonBall(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        navigate("/error404");
      });
  };

  const handleMainPage = () => {
    navigate("/");
  };
  return (
    <IsLoadingContext.Provider value={{ loading, setLoading }}>
      <CurrentZContext.Provider value={{ dragonBall, setDragonBall }}>
        <div className="App">
          <Header
            handleGetDragonBall={handleGetDragonBall}
            handleMainPage={handleMainPage}
          />
          <Routes>
            <Route path="*" element={<Main />} />
            <Route
              path="/card/:id"
              element={<Card handleGetDragonBall={handleGetDragonBall} />}
            />
            <Route path="/error404" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </CurrentZContext.Provider>
    </IsLoadingContext.Provider>
  );
}

export default App;
