import Preloader from "../Preloader/Preloader";
import { useContext, useState, useEffect } from "react";
import { CurrentZContext } from "../../contexts/CurrentZContext";
import { IsLoadingContext } from "../../contexts/IsLoadingContext";
import { useParams } from "react-router-dom";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import { getAllCharacters } from "../../utils/api";
import "./Card.css";

const Card = ({ handleGetDragonBall }) => {
  const { dragonBall } = useContext(CurrentZContext);
  const { loading, setLoading } = useContext(IsLoadingContext);
  const { characters } = useContext(CurrentZContext);
  const { id } = useParams;

  useEffect(() => {
    handleGetDragonBall(id);
  }, [id]);

  const { image, name, ki, race, gender, affiliation } = dragonBall;

  const goToPrevious = () => {
    handleGetDragonBall(characters.id - 1);
  };

  const goToNext = () => {
    handleGetDragonBall(characters.id + 1);
  };

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <div className="card__arrow-container">
            <div className="card__arrow-btns" onClick={goToPrevious}>
              <label>#{characters.id - 1}</label>
              <IoMdArrowDropleftCircle alt="previous card" />
            </div>
            <div className="card__arrow-btns" onClick={goToNext}>
              <label>#{characters.id + 1}</label>
              <IoMdArrowDroprightCircle alt="next card" />
            </div>
          </div>
          <div className="character__card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>Ki: {ki}</p>
            <p>Race: {race}</p>
            <p>Gender: {gender}</p>
            <p>Affiliation: {affiliation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
