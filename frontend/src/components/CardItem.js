import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../constants";

function CardItem({ seed }) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to="/services">
          <figure className="cards__item__pic-wrap" data-category={seed.title}>
            <img
              className="cards__item__img"
              alt="Travel"
              src={BACKEND_URL + seed.imageURL}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{seed.title}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
