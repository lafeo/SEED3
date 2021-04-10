import React, { useState,useEffect } from "react";
import axios from "axios";
import {BACKEND_URL} from "../constants";


export default function AddCrawler (){
    var script = document.createElement('script');
    script.type  = 'text/javascript';
    script.src = 'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js';
    document.head.appendChild(script);

    script.onload = function(){

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


    };

    const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1bmFsYmhhdGlhQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6Ikt1bmFsIiwibGFzdG5hbWUiOiJCaGF0aWEiLCJ1c2VybmFtZSI6IktCaGF0aWEiLCJpZCI6IjYwNzA1MGYyN2Y5ZmI1MDNlNzVkNTA4MCIsIm51bWJlck9mU2VlZHNXcml0dGVuIjo1LCJudW1iZXJPZkNyYXdsc1dyaXR0ZW4iOjAsImlhdCI6MTYxODAxMzgzNiwiZXhwIjoxNjE4MDI0NjM2fQ.UrvgUTlwXoUcIBVY9ZIP8dx4pODVGRwNsBeBObZ1VVk';

    const [description,setDescription] = useState('The classic tale');
    const [body,setBody] = useState(`<p>Once upon a time there lived a poor widow and her son Jack. One day, Jack&rsquo;s mother told him to sell their only cow. Jack went to the market and on the way he met a man who wanted to buy his cow. Jack asked, &ldquo;What will you give me in return for my cow?&rdquo; The man answered, &ldquo;I will give you five magic beans!&rdquo; Jack took the magic beans and gave the man the cow. But when he reached home, Jack&rsquo;s mother was very angry. She said, &ldquo;You fool! He took away your cow and gave you some beans!&rdquo; She threw the beans out of the window. Jack was very sad and went to sleep without dinner.</p>
<p>The next day, when Jack woke up in the morning and looked out of the window, he saw that a huge beanstalk had grown from his magic beans! He climbed up the beanstalk and reached a kingdom in the sky. There lived a giant and his wife. Jack went inside the house and found the giant&rsquo;s wife in the kitchen. Jack said, &ldquo;Could you please give me something to eat? I am so hungry!&rdquo; The kind wife gave him bread and some milk.</p>
<p>While he was eating, the giant came home. The giant was very big and looked very fearsome. Jack was terrified and went and hid inside. The giant cried, &ldquo;Fee-fi-fo-fum, I smell the blood of an Englishman. Be he alive, or be he dead, I&rsquo;ll grind his bones to make my bread!&rdquo; The wife said, &ldquo;There is no boy in here!&rdquo; So, the giant ate his food and then went to his room. He took out his sacks of gold coins, counted them and kept them aside. Then he went to sleep. In the night, Jack crept out of his hiding place, took one sack of gold coins and climbed down the beanstalk. At home, he gave the coins to his mother. His mother was very happy and they lived well for sometime.</p>
<p>Climbed the beanstalk and went to the giant&rsquo;s house again. Once again, Jack asked the giant&rsquo;s wife for food, but while he was eating the giant returned. Jack leapt up in fright and went and hid under the bed. The giant cried, &ldquo;Fee-fifo-fum, I smell the blood of an Englishman. Be he alive, or be he dead, I&rsquo;ll grind his bones to make my bread!&rdquo; The wife said, &ldquo;There is no boy in here!&rdquo; The giant ate his food and went to his room. There, he took out a hen. He shouted, &ldquo;Lay!&rdquo; and the hen laid a golden egg. When the giant fell asleep, Jack took the hen and climbed down the beanstalk. Jack&rsquo;s mother was very happy with him.</p>
<p>After some days, Jack once again climbed the beanstalk and went to the giant&rsquo;s castle. For the third time, Jack met the giant&rsquo;s wife and asked for some food. Once again, the giant&rsquo;s wife gave him bread and milk. But while Jack was eating, the giant came home. &ldquo;Fee-fi-fo-fum, I smell the blood of an Englishman. Be he alive, or be he dead, I&rsquo;ll grind his bones to make my bread!&rdquo; cried the giant. &ldquo;Don&rsquo;t be silly! There is no boy in here!&rdquo; said his wife.</p>
<p>The giant had a magical harp that could play beautiful songs. While the giant slept, Jack took the harp and was about to leave. Suddenly, the magic harp cried, &ldquo;Help master! A boy is stealing me!&rdquo; The giant woke up and saw Jack with the harp. Furious, he ran after Jack. But Jack was too fast for him. He ran down the beanstalk and reached home. The giant followed him down. Jack quickly ran inside his house and fetched an axe. He began to chop the beanstalk. The giant fell and died.</p>
<p>Jack and his mother were now very rich and they lived happily ever after.</p>`);

    const submitHandler = async (e) => {
        const detailsToSend = {
            description:description,
            body:body,
            parentWritingId:'6070da14ad26c886066c8c81'
        }
        e.preventDefault();
        console.log(detailsToSend);
        // axios.post('http://localhost:8010/writing-routes/add-new-crawler',detailsToSend,{
        //     headers:{
        //         'Content-Type':"application/json",
        //         'Authorization':`Bearer ${TOKEN}`
        //     }
        // }).then(response=>{
        //     console.log("New crawler added!");
        //     console.log(response);
        // }).catch(err=>{
        //     console.log("Error adding new crawler!");
        //     console.log(err);
        // })

    };



    return (
        
        <div>
            <form>

                <input value={description} placeholder='Description' onChange={(e)=>{setDescription(e.target.value)}}  type="text"/>
                {/*<textarea  onChange={(e) => (setBody(e.target.value))} placeholder='Body' name="body2" id="body2"/>*/}
                <div id="body"></div>

                <button onClick={submitHandler}>Submit</button>
            </form>

        </div>
    );
};
