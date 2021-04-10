import React, { useState,useEffect } from "react";
import axios from "axios";
import {BACKEND_URL} from "../constants";
import tinymce from "tinymce";

export default function AddNewSeed (){
    useEffect(() => {
        // var script = document.createElement('script');
        // script.type  = 'text/javascript';
        // script.src = 'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js';
        // document.head.appendChild(script);
        //
        // script.onload = function(){
            //
            tinymce.init({
                selector: '#body',

                plugins: [
                    'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
                    'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                    'table emoticons template paste help'
                ],
                toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | link image | print preview media fullpage | ' +
                    'forecolor backcolor emoticons | help',
                menu: {
                    favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | spellchecker | emoticons'}
                },
                menubar: 'favs file edit view insert format tools table help',
                content_css: 'css/content.css'
            });


        // };


    },[])
    const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaHVAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiUmFheWFhbiIsImxhc3RuYW1lIjoiU2FodSIsInVzZXJuYW1lIjoibGFmZW8iLCJpZCI6IjYwNzA1MGRhN2Y5ZmI1MDNlNzVkNTA3ZiIsIm51bWJlck9mU2VlZHNXcml0dGVuIjo1LCJudW1iZXJPZkNyYXdsc1dyaXR0ZW4iOjEsImlhdCI6MTYxODAwODU2NCwiZXhwIjoxNjE4MDE5MzY0fQ.M8c5JdaZJCG4HEHK6XZ8yxeIUgE-XCo7C7iuNdA78a8';
    const [title,setTitle] = useState('Jack and the beanstalk');
    const [imageURL,setImageURL] = useState(null);
    const [description,setDescription] = useState('The classic tale');
    const [body,setBody] = useState(``);


    useEffect(()=>{

    },[])

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',title);
        formData.append('imageURL',imageURL);
        formData.append('description',description);
        formData.append('body',body);
        console.log(body);
       // axios.post('http://localhost:8010/writing-routes/add-new-seed',formData,{
       //     headers:{
       //         'Content-Type':"multipart/form-data",
       //         'Authorization':`Bearer ${TOKEN}`
       //     }
       // }).then(response=>{
       //      console.log("New seed added!");
       //      console.log(response);
       //  }).catch(err=>{
       //      console.log("Error adding new seed!");
       //      console.log(err);
       //  })

    };



    return (
        <div>
            <form>
                <input value={title} placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}  type="text"/>
                <input value={description} placeholder='Description' onChange={(e)=>{setDescription(e.target.value)}}  type="text"/>

                <input onChange={e=>{
                    console.log("Body changed!");
                    // setBody(tinymce.activeEditor.getContent());
                }}    name="body" id="body"/>
                <input onChange={(e)=>{setImageURL(e.target.files[0])}} id="imageURL" name="imageURL" type="file" accept="image/*" />
                <button onClick={submitHandler}>Submit</button>
            </form>

        </div>
    );
};
