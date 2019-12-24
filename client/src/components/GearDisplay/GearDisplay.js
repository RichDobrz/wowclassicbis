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




const GearDisplay = () => {
  const [chosenClass, setClass] = useState(null)
  const [chosenPhase, setPhase] = useState(null)
  const [chosenSpec, setSpec] = useState(null)
  // let radioGrab = document.querySelector('input[name="class":checked').value

  const completeCheck = chosenPhase && chosenClass && chosenSpec 

  useEffect(() => {
    console.log(chosenPhase)
    console.log(chosenClass)
    console.log(chosenSpec)
    console.log(classWork.Warrior.options.length)
    if(chosenClass && chosenPhase && chosenSpec) {
      console.log(classWork[chosenClass][chosenSpec].head.link)
    }

    if(chosenClass !== "Warrior") {

    }
  })

  const doesClassWork = "doesClassWork"


  // <label>{classWork.Warrior.options[0]}</label>
  // <input type="radio" label={classWork.Warrior.options[0]} name="spec" value={classWork.Warrior.options[0]} onChange={() => setSpec(document.mySpec.spec.value)}></input>
  // <label>{classWork.Warrior.options[1]}</label>
  // <input type="radio" label={classWork.Warrior.options[1]} name="spec" value={classWork.Warrior.options[1]} onChange={() => setSpec(document.mySpec.spec.value)}></input>
  // <label>{classWork.Warrior.options[1]}</label>
  // <input type="radio" label={classWork.Warrior.options[2]} name="spec" value={classWork.Warrior.options[2]} onChange={() => setSpec(document.mySpec.spec.value)}></input>


  return(
    <div>
      <div>
        
      <section>
        
        <form name="myPhase" className="radio-toolbar">
          <input id="radioP1" type="radio" label="Phase 1" value="phase1" onChange={()=> setPhase(document.myPhase.phase.value)}  name="phase"/>
          <label htmlFor="radioP1">Phase 1</label>
          
          <input id="radioP2" type="radio" label="Phase 2" value="phase2" onChange={()=> setPhase(document.myPhase.phase.value)} name="phase"/>
          <label htmlFor="radioP2">Phase 2</label>
        
          <input id="radioP3" type="radio" label="Phase 3" value="phase3" onChange={()=> setPhase(document.myPhase.phase.value)} name="phase"/>
          <label htmlFor="radioP3">Phase 3</label>
        
          <input id="radioP4" type="radio" label="Phase 4" value="phase4" onChange={()=> setPhase(document.myPhase.phase.value)} name="phase"/>
          <label htmlFor="radioP4">Phase 4</label>

          <input id="radioP5" type="radio" label="Phase 5" value="phase5" onChange={()=> setPhase(document.myPhase.phase.value)} name="phase"/>
          <label htmlFor="radioP5">Phase 5</label>
    
          <input id="radioP6" type="radio" label="Phase 6" value="phase6" onChange={()=> setPhase(document.myPhase.phase.value)} name="phase"/>
          <label htmlFor="radioP6">Phase 6</label>
        </form>

      </section>
      <section>
        <form name="myClass" className="radio-toolbar">
          
          <input id="druidRadio" type="radio" label="Druid" value="Druid" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label htmlFor="druidRadio">Druid</label>

          <input id="hunterRadio" type="radio" label="Hunter" value="Hunter" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label htmlFor="hunterRadio">Hunter</label>

          <input id="mageRadio" type="radio" label="Mage" value="Mage" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label htmlFor="mageRadio">Mage</label>

          <input id="paladinRadio" type="radio" label="Paladin" value="Paladin" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label htmlFor="paladinRadio">Paladin</label>

          <input id="priestRadio" type="radio" label="Priest" value="Priest" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label htmlFor="priestRadio">Priest</label>

          <input id="rogueRadio" type="radio" label="Rogue" value="Rogue" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label htmlFor="rogueRadio">Rogue</label>

          <input id="shamanRadio" type="radio" label="Shaman" value="Shaman" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label htmlFor="shamanRadio">Shaman</label>

          <input id="warlockRadio" type="radio" label="Warlock" value="Warlock" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label htmlFor="warlockRadio">Warlock</label>

          <input id="warriorRadio" type="radio" label="Warrior" value="Warrior" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label htmlFor="warriorRadio">Warrior</label>
        </form>
      </section>
        
        {
          chosenClass && classWork.Warrior.options ? 
          <section>
            <form name="mySpec" className="radio-toolbar">
              {classWork.Warrior.options.map((specOptions) => {
                return (
                <React.Fragment key={specOptions}>
                <input name="mySpec" id={specOptions} type="radio" label={specOptions} value={specOptions} onChange={() => setSpec(specOptions)}/>
                <label htmlFor={specOptions}>{specOptions}</label>
                </React.Fragment>
                )
              })}
            </form>
          </section> : <section></section>

        }
      </div>


      <div className="main-wrapper">
        
        <div className="gear-icons">

          {/* This is the left side section of the character/gear screen */}

          <div className="left-gear">
            
            <a href="#" className="headLink" data-wowhead={ completeCheck ? classWork[chosenClass][chosenSpec].head.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ? 
                <img className="coloredBG" src={classWork[chosenClass][chosenSpec].head.img}></img> :
                <img src={blankHead}></img>
              }
            </a> 
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].neck.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].neck.img}></img> :
                <img src={blankNeck}></img>
              }
            </a> 
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].shoulder.link : "" }> 
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].shoulder.img}></img> :
                <img src={blankShoulder}></img>
              }
            </a> 
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].back.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].back.img}></img> :
                <img src={blankBack}></img>
              }
            </a> 

            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].chest.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].chest.img}></img> :
                <img src={blankChest}></img>
              }
            </a> 
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].wrist.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].wrist.img}></img> :
                <img src={blankWrist}></img>
              }
            </a> 
          </div>
          {/* This is the bottom section of the character/gear screen */}

          <div className="bottom-gear">
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].mainhand.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].mainhand.img}></img> :
                <img src={blankMainhand}></img>
              }
            </a> 
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].offhand.link : "" }> 
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].offhand.img}></img> :
                <img src={blankOffhand}></img>
              }
            </a> 
          </div>
          
          {/* This is right side section of the character/gear screen */}

          <div className="right-gear">
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].hands.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].hands.img}></img> :
                <img src={blankGlove}></img>
              } 
            </a> 
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].waist.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].waist.img}></img> :
                <img src={blankWaist}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].legs.link : "" }>
             {
               chosenPhase && chosenClass && chosenSpec ?
               <img src={classWork[chosenClass][chosenSpec].legs.img}></img> :
               <img src={blankLegs}></img>
             }
            </a> 
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].feet.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].feet.img}></img> :
                <img src={blankBoots}></img>
              }
            </a> 
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].ring1.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].ring1.img}></img> :
                <img src={blankFinger}></img>
              }
            </a> 
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].ring2.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].ring2.img}></img> :
                <img src={blankFinger}></img>
              }
            </a> 
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].trinket1.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img src={classWork[chosenClass][chosenSpec].trinket2.img}></img> :
                <img src={blankTrinket}></img>
              }
            </a> 
            
            <a href="#" data-wowhead={ chosenPhase && chosenClass && chosenSpec ? classWork[chosenClass][chosenSpec].trinket2.link : "" }>
              {
                chosenPhase && chosenClass && chosenSpec ?
                <img className='coloredBG'  src={classWork[chosenClass][chosenSpec].trinket2.img}></img> :
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
