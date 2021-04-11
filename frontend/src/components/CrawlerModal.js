import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const CrawlerModal = ({ crawler }) => {
  //   MODAL
  console.log(crawler);
  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "40%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#100B18",
      opacity: 0.9,
      boxShadow: "20px 20px 10px gray",
      borderRadius: "20px",
      width: "70%",
      height: "70%",
    },
    cursor: "pointer",
  };

  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "white";
  }

  const closeModal = () => {
    setIsOpen(!modalIsOpen);
  };

  Modal.setAppElement("#root");
  return (
    <CrawlerWrapper key={crawler.authorID} onClick={openModal}>
      <Crawler key={crawler.authorID}>
        {modalIsOpen ? (
          <Modal
            key={crawler.authorID}
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
              <CrawlerAuthorName>
                By {crawler.userDetails.username}
              </CrawlerAuthorName>
            </HeadingContainer>
            <DangerousText dangerouslySetInnerHTML={{ __html: crawler.body }} />
            <ButtonWrapper>
              <Button onClick={closeModal}>Close</Button>
            </ButtonWrapper>
          </Modal>
        ) : (
          ""
        )}
        <div>
          <h3 style={{ textAlign: "center", fontSize: "1.5rem" }}>Crawl By</h3>
          <br />
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "Lobster Two" }}>
              {crawler.userDetails.username}
            </h2>
          </div>
        </div>
      </Crawler>
    </CrawlerWrapper>
  );
};

const DangerousText = styled.div`
  font-size: 1.2rem;
  color: white;
`;
const CrawlerAuthorName = styled.div`
  font-size: 1.2rem;
  color: white;
  text-align: center;
`;
const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-size: 1.5rem;
  flex-direction: column;
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
    background-color: rgba(17, 30, 102, 0.4);
    color: white;
  }
`;
const Crawler = styled.div`
  cursor: pointer;
`;

const CrawlerWrapper = styled.div`
  color: white;
  margin: 3rem;
  max-width: 50%;
  height: 30%;
  backdrop-filter: blur(5px);
  background-color: rgba(76, 73, 255, 0.2);
  padding: 2rem 3rem;
  border-radius: 20px;
  cursor: pointer;
`;

export default CrawlerModal;
