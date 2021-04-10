import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BACKEND_URL} from "../../constants";

export default function SeedDetailsComponent(props) {
    const [allCrawlers,setAllCrawlers] = useState([]);
    const [mainSeed,setMainSeed] = useState(null);
    const [showData,setShowData] = useState(false);
    const [showSeed,setShowSeed] = useState(false);
    function renderCrawlers(){
        return allCrawlers.map(crawler=>(
            <h1>crawler.authorID</h1>
        ))
    }

    useEffect(()=>{
        setMainSeed(props.location.state.seed);
        axios.get(`${BACKEND_URL}writing-routes/get-crawlers-for-seed/${props.location.state.seed._id}/`).then(allCrawlers=>{
            if (allCrawlers.data.success){
                console.log("All crawlers arrived!");

                setAllCrawlers(allCrawlers.data.allCrawlers);
                setShowData(true);
            }else{
                console.log("Could not fetch all crawlers!");
            }


        }).catch(err=>{
            console.log("Error getting all the crawlers!");
            console.log(err);
        })
    },[])

    return (
        <>

        </>
    );
}


