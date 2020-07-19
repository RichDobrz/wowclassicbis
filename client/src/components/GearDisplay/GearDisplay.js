import React, { useState, useEffect } from "react"
import "./GearDisplay.css"
import classWork from "../../wowhead/classData"
import blankHead from "../../images/UIheadslot.png"
import blankNeck from "../../images/UIneckslot.png"
import blankShoulder from "../../images/UIshoulderslot.png"
import blankChest from "../../images/UIchestslot.png"
import blankBack from "../../images/UIbackslot.png"
import blankWrist from "../../images/UIwristslot.png"
import blankGlove from "../../images/UIhandslot.png"
import blankWaist from "../../images/UIwaistslot.png"
import blankLegs from "../../images/UIlegslot.png"
import blankBoots from "../../images/UIfeetslot.png"
import blankFinger from "../../images/UIfingerslot.png"
import blankTrinket from "../../images/UItrinketslot.png"
import blankMainhand from "../../images/UImainhandslot.png"
import blankOffhand from "../../images/UIoffhandslot.png"




const GearDisplay = (props) => {
  const doesClassWork = props.chosenPhase && props.chosenClass && props.chosenSpec

  return (
    <div>


      <div className="main-wrapper">

        <div className="gear-icons">

          {/* This is the left side section of the character/gear screen */}

          <div className="left-gear">

            <a href="#" className="headLink" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].head.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img className="coloredBG" src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].head.img}></img> :
                  <img src={blankHead}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].neck.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].neck.img}></img> :
                  <img src={blankNeck}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].shoulder.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].shoulder.img}></img> :
                  <img src={blankShoulder}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].back.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].back.img}></img> :
                  <img src={blankBack}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].chest.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].chest.img}></img> :
                  <img src={blankChest}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].wrist.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].wrist.img}></img> :
                  <img src={blankWrist}></img>
              }
            </a>
          </div>
          {/* This is the bottom section of the character/gear screen */}

          <div className="bottom-gear">

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].mainhand.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].mainhand.img}></img> :
                  <img src={blankMainhand}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].offhand.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].offhand.img}></img> :
                  <img src={blankOffhand}></img>
              }
            </a>
          </div>

          {/* This is right side section of the character/gear screen */}

          <div className="right-gear">

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].hands.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].hands.img}></img> :
                  <img src={blankGlove}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].waist.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].waist.img}></img> :
                  <img src={blankWaist}></img>
              }
            </a>
            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].legs.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].legs.img}></img> :
                  <img src={blankLegs}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].feet.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].feet.img}></img> :
                  <img src={blankBoots}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].ring1.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].ring1.img}></img> :
                  <img src={blankFinger}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].ring2.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].ring2.img}></img> :
                  <img src={blankFinger}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].trinket1.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].trinket2.img}></img> :
                  <img src={blankTrinket}></img>
              }
            </a>

            <a href="#" data-wowhead={doesClassWork ? classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].trinket2.link : ""}>
              {
                props.chosenPhase && props.chosenClass && props.chosenSpec ?
                  <img className='coloredBG' src={classWork[props.chosenClass][props.chosenPhase][props.chosenSpec].trinket2.img}></img> :
                  <img src={blankTrinket}></img>
              }
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default GearDisplay
