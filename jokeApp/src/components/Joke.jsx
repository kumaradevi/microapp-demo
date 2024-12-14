import React, { useState } from 'react'
import "./Joke.css"
const Joke = () => {
    const [joke,setJoke]=useState("");

    const getJokes=async()=>{
     try{
        const res=await fetch("https://v2.jokeapi.dev/joke/Any");
        const data=await res.json();
        console.log(data.setup);
        setJoke(data.setup)

     }
     catch(e){
        console.error(e);
     }
       
        
    }

  return (
    <div className='joke-container'>
        <h1 >Joke App</h1>
        <p>Get Random Joke</p>
       <div className='display-container'>
       <div className='display'>{joke?joke:<p>click below to get jokes</p>}</div>
       <button onClick={getJokes}>get</button>
       </div>
    </div>
  )
}

export default Joke