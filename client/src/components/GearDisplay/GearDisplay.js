import React, { useState } from "react"
import "./GearDisplay.css"
import head from "../../images/UIheadslot.png"
import neck from "../../images/UIneckslot.png"
import shoulder from "../../images/UIshoulderslot.png"
import chest from "../../images/UIchestslot.png"
import back from "../../images/UIbackslot.png"
import wrist from "../../images/UIwristslot.png"
import glove from "../../images/UIhandslot.png"
import waist from "../../images/UIwaistslot.png"
import legs from "../../images/UIlegslot.png"
import boots from "../../images/UIfeetslot.png"
import finger from "../../images/UIfingerslot.png"
import trinket from "../../images/UItrinketslot.png"
import mainhand from "../../images/UImainhandslot.png"
import offhand from "../../images/UIoffhandslot.png"



const GearDisplay = () => {
  const [selectedClass, updateClass] = useState(null)
  const [example, setExample] = useState(null)


  return(
    <div className="main-wrapper">
      <button onClick={()=> updateClass("Warrior")}>Class</button>
      <button onClick={() => setExample("Success")}>example</button>
      
      <div className="gear-icons">

        {/* This is the left side section of the character/gear screen */}

        <div className="left-gear">
          <img src={head}></img>
          <img src={neck}></img>
          <img src={shoulder}></img>
          <img src={chest}></img>
          <img src={back}></img>
          <img src={wrist}></img>
        </div>

        {/* This is the bottom section of the character/gear screen */}

        <div className="bottom-gear">
          <img src={mainhand}></img>
          <img src={offhand}></img>
        </div>
        
        {/* This is right side section of the character/gear screen */}

        <div className="right-gear">
          <img src={glove}></img>
          <img src={waist}></img>
          <img src={legs}></img>
          <img src={boots}></img>
          <img src={finger}></img>
          <img src={finger}></img>
          <img src={trinket}></img>
          <img src={trinket}></img>
        </div>

  
  
      </div>
  </div>
  )
}

export default GearDisplay
