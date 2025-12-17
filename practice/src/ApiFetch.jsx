import React from 'react'
import { useState,useEffect } from 'react'
import "./App.css";

function ApiFetch() {
    const [cards,setCards]=useState([]);

    const fetchData=async()=>{
        let a=await fetch("https://jsonplaceholder.typicode.com/posts");
        let data=await a.json();
        setCards(data);
        console.log(data);
    }

    useEffect(() => {
      fetchData()
    },[])
    
  return (
    <div className='flex gap-10 flex-wrap'>
        {cards.map((card)=>{
            return <div className="border-2 w-60" key={card.id}>
                <h1>{card.id}</h1>
                <p>{card.body}</p>
                <span>By user: {card.userId}</span>
            </div>
        })}
    </div>
  )
}

export default ApiFetch