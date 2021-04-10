import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constants";
import styled from "styled-components";
import "./Details.scss";

export default function SeedDetailsComponent(props) {
  const [allCrawlers, setAllCrawlers] = useState([]);
  const [mainSeed, setMainSeed] = useState(props.location.state.seed);
  const [showData, setShowData] = useState(false);
  const [showSeed, setShowSeed] = useState(false);
  function renderCrawlers() {
    return allCrawlers.map((crawler) => <h1>crawler.authorID</h1>);
  }

  useEffect(() => {
    setMainSeed(props.location.state.seed);
    axios
      .get(
        `${BACKEND_URL}writing-routes/get-crawlers-for-seed/${props.location.state.seed._id}/`
      )
      .then((allCrawlers) => {
        if (allCrawlers.data.success) {
          console.log("All crawlers arrived!");

          setAllCrawlers(allCrawlers.data.allCrawlers);
          setShowData(true);
        } else {
          console.log("Could not fetch all crawlers!");
        }
      })
      .catch((err) => {
        console.log("Error getting all the crawlers!");
        console.log(err);
      });
  }, []);

  return (
    <Full>
      <SeedContainer>
        <SeedWrapper>
          <Seed mainSeed={mainSeed}>
            <img src={BACKEND_URL + mainSeed.imageURL} alt="img"></img>
            <h1>{mainSeed.title}</h1>
          </Seed>
        </SeedWrapper>
        <CrawlerContainer>
          <CrawlerWrapper>
            {allCrawlers.map((crawler) => (
              <Crawler key={crawler.authorID}>
                <div>{crawler.title}</div>
                {/* <div>{crawler.author}</div>
                <div>{crawler.pointOfClicking}</div> */}
              </Crawler>
            ))}
          </CrawlerWrapper>
        </CrawlerContainer>
      </SeedContainer>
    </Full>
  );
}

const Full = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/wallpaper.jpg");
  overflow: hidden;
`;

const SeedContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-sizing: border-box;
  overflow: hidden;
`;

const SeedWrapper = styled.div`
  color: white;
  /* margin: 3rem; */
  height: 60%;
  max-width: 50vw;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  margin: 4rem 5rem;
`;

const Seed = styled.div`
  font-size: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem 9rem 3rem;

  img {
    width: 40%;
    height: 220px;
    border-radius: 50%;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
  }
`;

const Crawler = styled.div``;

const CrawlerContainer = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 26, 255, 0.1);
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
`;
