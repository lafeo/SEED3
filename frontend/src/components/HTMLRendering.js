import React,{useState,useEffect} from 'react'
import axios from 'axios';


export default function HTMLRendering() {
    const [allSeeds,setAllSeeds] = useState([]);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}writing-routes/get-all-seeds/`).then(allSeeds=>{
            console.log(allSeeds.data);
            setAllSeeds(allSeeds.data.allSeeds);
        }).catch(err=>{
            console.log(err);
        })


    },[]);
    const renderAllSeeds = ()=>{
        return allSeeds.map(seed=>{
            return (
                <>
                <h2>{seed.title}</h2>
                <h3>{seed.description}</h3>
                <div dangerouslySetInnerHTML={{ __html:seed.body}}/>
                </>
            )
        })
    }

    return (
        <div>
            <h1>This is a test component!</h1>
         {renderAllSeeds()}
            
        </div>
    )
}
