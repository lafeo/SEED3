import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constants";
import styled from "styled-components";
import "./Details.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as outlined} from '@fortawesome/free-regular-svg-icons';

export default function SeedDetailsComponent(props) {
  const [allCrawlers, setAllCrawlers] = useState([]);
  const [mainSeed, setMainSeed] = useState(props.location.state.seed);
  const [starCounter,setStarCounter] = useState(props.location.state.seed.stars);
  const [seedStarred,setSeedStarred] = useState(false);
  const [body,setBody] = useState('');
  const TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1bmFsYmhhdGlhQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6Ikt1bmFsIiwibGFzdG5hbWUiOiJCaGF0aWEiLCJ1c2VybmFtZSI6IktCaGF0aWEiLCJpZCI6IjYwNzA1MGYyN2Y5ZmI1MDNlNzVkNTA4MCIsIm51bWJlck9mU2VlZHNXcml0dGVuIjo1LCJudW1iZXJPZkNyYXdsc1dyaXR0ZW4iOjEsImlhdCI6MTYxODA5MTU3NiwiZXhwIjoxNjE4MTAyMzc2fQ.RAw9X5ovxa61dhM-nnt0ztaB1ElpQ-a2dOME9rJrxlg';
  function renderCrawlers() {
    return allCrawlers.map((crawler) => <h1>crawler.authorID</h1>);
  }
  function changeSeedStarred(){
    axios.put(`${BACKEND_URL}writing-routes/update-writing-stars/${mainSeed._id}`,{
      newNumberOfStars:(starCounter + (!seedStarred ? 1:-1))
    },{
      headers:{
        'Content-Type':'application/json',
        'Authorization' : `Bearer ${TOKEN}`
      }
    }).then(response=>{
      response=response.data;
      if (response.success){
        console.log("Stars Updated!");
        setStarCounter(starCounter + (!seedStarred?1:-1))
        console.log(response);
        setSeedStarred(!seedStarred);
      }else{
        console.log("Could not update stars!!");

      }

    }).catch(err=>{
      console.log("Error updating number of stars!!");
      console.log(err);
    })

  }

  useEffect(async() => {
    await axios.get(`${BACKEND_URL}writing-routes/get-seed-body-and-stars/${props.location.state.seed._id}`).then(response=>{
      if (response.data.success){
        setBody(response.data.body);
        setStarCounter(response.data.stars);
      }
    }).catch(err=>{
      console.log("Error!");
      console.log(err);
    })


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

  return (
    <Full>
      <SeedContainer>
       <SeedWrapper>
          <SeedTitle>{mainSeed.title}
            <StarsArea>
              {starCounter}
            </StarsArea>
          </SeedTitle>


          <AuthorName>  By {mainSeed.userDetails.username}
            <StarsArea>
              <FontAwesomeIcon onClick={changeSeedStarred} icon={seedStarred ? faStar : outlined}/>
            </StarsArea>

          </AuthorName>
          <Seed mainSeed={mainSeed}>
            <h3 dangerouslySetInnerHTML={{ __html: body}} />

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

const SeedTitle = styled.div`
  font-size:2.3rem;
  text-align:center;
`;

const StarsArea = styled.div`
  float:right;
  font-size:1.6rem;
`


const Full = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/wallpaper.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 87vh;
`;
const AuthorName = styled.div`
  text-align: center;
  font-size:1.1rem;
  margin:0.3rem;
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
  height: 80vh;
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

const Crawler = styled.div``;

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
