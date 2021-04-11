import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { BACKEND_URL } from "../../constants";
import styled from "styled-components";
import "./Details.scss";

import CrawlerModal from "../CrawlerModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlined } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function SeedDetailsComponent(props) {
  const [allCrawlers, setAllCrawlers] = useState([]);
  const [mainSeed, setMainSeed] = useState(props.location.state.seed);
  const [wait, setWait] = useState(true);
  console.log(props.location.state.isLoggedIn);
  const [starCounter, setStarCounter] = useState(
    props.location.state.seed.stars
  );
  const [seedStarred, setSeedStarred] = useState(false);
  const [body, setBody] = useState("");
  const TOKEN = localStorage.getItem("TOKEN");
  function renderCrawlers() {
    return allCrawlers.map((crawler) => <h1>crawler.authorID</h1>);
  }
  function changeSeedStarred() {
    axios
      .put(
        `${BACKEND_URL}writing-routes/update-writing-stars/${mainSeed._id}`,
        {
          newNumberOfStars: starCounter + (!seedStarred ? 1 : -1),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((response) => {
        response = response.data;
        if (response.success) {
          console.log("Stars Updated!");
          setStarCounter(starCounter + (!seedStarred ? 1 : -1));
          console.log(response);
          setSeedStarred(!seedStarred);
        } else {
          console.log("Could not update stars!!");
        }
      })
      .catch((err) => {
        console.log("Error updating number of stars!!");
        console.log(err);
      });
  }

  useEffect(() => {
    axios
      .get(
        `${BACKEND_URL}writing-routes/get-seed-body-and-stars/${props.location.state.seed._id}`
      )
      .then((response) => {
        if (response.data.success) {
          setBody(response.data.body);
          setStarCounter(response.data.stars);

          axios
            .get(
              `${BACKEND_URL}writing-routes/get-crawlers-for-seed/${props.location.state.seed._id}/`
            )
            .then((allCrawlers) => {
              if (allCrawlers.data.success) {
                console.log("All crawlers arrived!");

                setAllCrawlers(allCrawlers.data.allCrawlers);
              } else {
                console.log("Could not fetch all crawlers!");
              }
            })
            .catch((err) => {
              console.log("Error getting all the crawlers!");
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log("Error!");
        console.log(err);
      });
  }, []);

  return (
    <Full>
      <SeedContainer>
        <SeedWrapper>
          <SeedTitle>
            {mainSeed.title}
            <StarsArea>{starCounter}</StarsArea>
          </SeedTitle>

          <AuthorName>
            {" "}
            By {mainSeed.userDetails.username}
            <StarsArea>
              {props.location.state.isLoggedIn ? (
                <FontAwesomeIcon
                  onClick={changeSeedStarred}
                  icon={seedStarred ? faStar : outlined}
                />
              ) : null}
            </StarsArea>
          </AuthorName>
          <Seed mainSeed={mainSeed}>
            <h3 dangerouslySetInnerHTML={{ __html: body }} />
          </Seed>
        </SeedWrapper>

        <CrawlerContainer>
          {allCrawlers.length === 0 ? (
            <h1>No Crawls</h1>
          ) : (
            allCrawlers.map((crawler) => <CrawlerModal crawler={crawler} />)
          )}

          {props.location.state.isLoggedIn ? (
            <Link
              to={{
                pathname: "/add-new-crawler",
                state: {
                  seed: mainSeed,
                  body: body,
                },
              }}
            >
              <Button>Add New Crawler</Button>
            </Link>
          ) : null}
        </CrawlerContainer>
      </SeedContainer>
    </Full>
  );
}

const SeedTitle = styled.div`
  font-size: 2.3rem;
  text-align: center;
`;

const StarsArea = styled.div`
  float: right;
  font-size: 1.6rem;
`;

// const DangerousText = styled.div`
//   font-size: 1.2rem;
//   color: white;
// `;
// const CrawlerAuthorName = styled.div`
//   font-size: 1.2rem;
//   color: white;
//   text-align: center;
// // `;
// const HeadingContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 2rem;
//   font-size: 1.5rem;
//   flex-direction: column;
// `;

// const ButtonWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const Button = styled.button`
  padding: 0.3rem 2rem;
  border-radius: 5px;
  margin: 1rem;
  text-align: center;
  cursor: pointer;
  transition: 0.3s all ease-out;
  font-size: 1rem;
  font-weight: bolder;
  &:hover {
    background-color: #100828;
    color: whitesmoke;
  }
`;

const Full = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/wallpaper.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 88vh;
`;
const AuthorName = styled.div`
  text-align: center;
  font-size: 1.1rem;
  margin: 0.3rem;
`;

const SeedContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-sizing: border-box;
  /* overflow: scroll; */
`;

const SeedWrapper = styled.div`
  color: white;
  /* margin: 3rem; */
  height: 70vh;
  max-width: 70vw;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  margin: 2.5rem 4.5rem;
  /* padding: 2.5rem 4.5rem */
  /* transform: translateY(-25%); */
  overflow: scroll;
`;

const Seed = styled.div`
  font-size: 1.1rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem 9rem 3rem;
  /* img {
    width: 40%;
    height: 220px;
    border-radius: 50%;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
  } */
`;

const Crawler = styled.div`
  cursor: pointer;
  backdrop-filter: blur(5px);
  background-color: rgba(119, 88, 255, 0.2);
`;

const CrawlerContainer = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  height: 70vh;
  transform: translateY(6%);
  margin-right: 1rem;
`;

const CrawlerWrapper = styled.div`
  color: white;
  margin: 3rem;
  max-width: 50%;
  height: 30%;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem 3rem;
  border-radius: 20px;
  cursor: pointer;
`;
