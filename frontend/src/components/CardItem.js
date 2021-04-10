import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../constants";
import './CardItem.css'


function CardItem({ crawler }) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link"  to={{
          pathname: "/seed-details",
          state:{
            seed:crawler
          }
        }}>
          <figure className="cards__item__pic-wrap" data-category={crawler.title}>
            <img
              className="cards__item__img"
              alt="Travel"
              src={BACKEND_URL + crawler.imageURL}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{crawler.description}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
