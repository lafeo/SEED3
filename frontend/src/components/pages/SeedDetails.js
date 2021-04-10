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

  return (
    <Full>
      <SeedContainer>
        <SeedWrapper>
          <Seed mainSeed={mainSeed}>
            {/* <img src={BACKEND_URL + mainSeed.imageURL} alt="img"></img> */}
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              expedita doloremque minus sequi eos porro iure laborum iusto
              voluptatibus ducimus in optio, et modi? Nam illum esse quod vitae
              nemo dignissimos deleniti laborum consectetur omnis. Porro rerum
              distinctio similique blanditiis harum aperiam commodi sed
              laboriosam quibusdam, provident iure explicabo! Excepturi
              molestias accusamus asperiores est dolor tenetur sit doloribus a
              enim beatae nemo harum repellat ducimus ex tempora iure, ab, eaque
              magnam, eius voluptas assumenda ullam repudiandae praesentium
              architecto? Eos animi deserunt dolore esse dolorem harum iusto
              officiis necessitatibus. Quis, dolore porro aut eos ipsam quisquam
              ipsum! Laudantium sit dolore dolorem, saepe quaerat architecto
              quia nihil cumque hic vitae magni incidunt in blanditiis et unde
              amet impedit aperiam sequi eos corporis. Temporibus ullam
              perspiciatis ea. Ipsum doloremque architecto eius numquam ratione
              ea omnis quos iure sapiente neque similique tempora facere quidem,
              nihil porro accusantium quod molestiae eligendi earum at vel quas?
              Omnis dolorum maiores ratione ipsum rerum magnam vel sint dolore,
              odio ipsam officiis, iusto mollitia adipisci repellat excepturi
              saepe commodi eos. Dolorem magni fugit facere cupiditate labore
              quis ut qui sint. Autem, explicabo aut exercitationem facilis
              ipsum similique labore, doloremque illum cum quis assumenda ea
              harum enim. Saepe, quo laborum. Tempora, nihil corrupti doloribus
              repellat maiores in rerum officiis dolorum obcaecati nemo alias
              aspernatur praesentium necessitatibus itaque dicta ratione unde
              nisi, error non quasi, repudiandae consequatur expedita
              voluptatum? Impedit ipsum vero sunt. Quidem doloremque itaque
              doloribus totam voluptate voluptatibus natus perspiciatis
              explicabo id facere sequi, suscipit modi numquam accusantium rerum
              libero ut cupiditate quibusdam incidunt molestiae accusamus
              praesentium sit. Vero, totam fugit recusandae eveniet quaerat
              maiores similique maxime quos autem nihil et sapiente inventore
              labore, quibusdam, veniam eius eum in! Unde sit eaque illum
              repellat impedit! Corrupti magni nesciunt placeat. Et, vel sequi
              unde ut numquam eum nobis earum sapiente autem, deleniti repellat
              aperiam dolorem dolore eaque natus similique quam cum? Tempora
              nobis, enim tenetur ullam doloremque exercitationem incidunt
              architecto. Impedit pariatur adipisci, beatae sapiente maxime est
              dolore deleniti? Ut laboriosam fuga perspiciatis pariatur totam?
              Voluptatibus id consequuntur fugit beatae nihil illo excepturi.
              Illo tempora officia nesciunt ea suscipit ut eveniet totam illum
              sapiente inventore natus eius error laboriosam optio, possimus sed
              ipsum laudantium, iste dolor tenetur dolorum quo, expedita quia.
              Accusamus corrupti quaerat et voluptates, voluptatum soluta qui
              facilis neque reiciendis temporibus sed officiis consequuntur
              fugit nostrum expedita saepe aliquam ut quos maiores illum.
              Reprehenderit dignissimos ipsum voluptates dolores debitis aperiam
              dicta suscipit veniam assumenda ratione modi, dolor placeat, nobis
              sit tempora nostrum iure ad enim blanditiis amet, itaque quasi?
              Illum quaerat at fugiat deleniti iusto facere inventore nostrum
              dolorem rem laudantium? Facere iure impedit tenetur error illo
              quae vero animi soluta quibusdam consequuntur, cumque accusantium.
              Quaerat perferendis quia voluptatibus delectus corrupti quam earum
              quas exercitationem libero alias rerum aperiam qui, dolorum
              repellendus sapiente eum? Voluptatem eos, minima sequi placeat
              quos distinctio voluptatum laborum ex architecto natus voluptate
              dolores atque hic explicabo iste rerum, fuga perferendis sint rem,
              beatae praesentium asperiores? Sint excepturi nulla ea sunt alias
              expedita odit!
            </h5>
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
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 87vh;
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
