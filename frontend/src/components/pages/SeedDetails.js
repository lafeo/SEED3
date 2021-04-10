import React, { useState, useEffect } from "react";
import Modal from "react-modal";
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
    axios
      .get(
        `${BACKEND_URL}writing-routes/get-crawlers-for-seed/${props.location.state.seed._id}/`
      )
      .then((allCrawlers) => {
        if (allCrawlers.data.success) {
          console.log("All crawlers arrived!");
          console.log(allCrawlers.data);
          console.log(mainSeed);

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

  const ftch = fetch("http://localhost:8010/get-seed/" + mainSeed._id);
  console.log(fetch); //this is what comes back from the --> the get-seeds ADD THIS -- (1)

  //   MODAL
  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "40%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#295bff",
      boxShadow: "20px 20px 10px gray",
      borderRadius: "20px",
      width: "70%",
      height: "70%",
    },
  };

  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "white";
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement("#root");

  return (
    <Full>
      <SeedContainer>
        <SeedWrapper>
          <Seed mainSeed={mainSeed}>
            <div dangerouslySetInnerHTML={{ __html: mainSeed.body }} />
          </Seed>
        </SeedWrapper>
        <CrawlerContainer>
          <CrawlerWrapper>
            {allCrawlers.map((crawler) => (
              <Crawler key={crawler.authorID} onClick={openModal}>
                {modalIsOpen ? (
                  <Modal
                    closeTimeoutMS={500}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <HeadingContainer>
                      <h2
                        ref={(_subtitle) => (subtitle = _subtitle)}
                        style={{ color: "blue" }}
                      >
                        {crawler.title}
                      </h2>
                    </HeadingContainer>
                    <DangerousText
                      dangerouslySetInnerHTML={{ __html: crawler.body }}
                    />
                    <ButtonWrapper>
                      <Button onClick={closeModal}>Close</Button>
                    </ButtonWrapper>
                  </Modal>
                ) : (
                  ""
                )}
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

const DangerousText = styled.div`
  font-size: 1.2rem;
  color: white;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-size: 1.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

const SeedContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-sizing: border-box;
  /* overflow: scroll; */
`;

const SeedWrapper = styled.div`
  color: white;
  /* margin: 3rem; */
  height: 60vh;
  max-width: 50vw;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  margin: 2.5rem 4.5rem;
  /* padding: 2.5rem 4.5rem */
  /* transform: translateY(-25%); */
  overflow: scroll;
`;

const Seed = styled.div`
  font-size: 2rem;
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
`;

const CrawlerContainer = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 26, 255, 0.1);
  border-radius: 20px;
  height: 80%;
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
`;
