import React from 'react'
import { useEffect } from 'react'

const Navbar = ({color}) => {


    //on first render i will change
    useEffect(() => {
    alert("Welcome to my page.This is my first render");
  }, [])


  //run on when some certain values change
    useEffect(() => {
      alert("Hey i am running cause color was changed")
    }, [color])
    
  return (
    <div>Navbar is here and color is {color}</div>
  )
}

export default Navbar