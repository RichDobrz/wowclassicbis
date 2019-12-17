import React, { useState, useEffect } from "react"
import "./GearDisplay.css"
import classWork from "../../wowhead/classData"
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
  const [chosenClass, setClass] = useState(null)
  const [chosenPhase, setPhase] = useState(null)
  const [chosenSpec, setSpec] = useState(null)
  // let radioGrab = document.querySelector('input[name="class":checked').value

  useEffect(() => {
    console.log(chosenPhase)
    console.log(chosenClass)
    console.log(chosenSpec)
    console.log(classWork.Warrior.options.length)
    if(chosenClass && chosenPhase) {
      console.log(classWork[chosenClass].fury)
    }
  })

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
        
        <form name="myPhase">
          <label>Phase 1</label>
            <input type="radio" label="Phase 1" value="phase1" onChange={()=> setPhase(document.myPhase.phase.value)}  name="phase"/>
          <label>Phase 2</label>
            <input type="radio" label="Phase 2" value="phase2" onChange={()=> setPhase(document.myPhase.phase.value)} name="phase"/>
          <label>Phase 3</label>
            <input type="radio" label="Phase 3" value="phase3" onChange={()=> setPhase(document.myPhase.phase.value)} name="phase"/>
          <label>Phase 4</label>
            <input type="radio" label="Phase 4" value="phase4" onChange={()=> setPhase(document.myPhase.phase.value)} name="phase"/>
          <label>Phase 5</label>
            <input type="radio" label="Phase 5" value="phase5" onChange={()=> setPhase(document.myPhase.phase.value)} name="phase"/>
          <label>Phase 6</label>
            <input type="radio" label="Phase 6" value="phase6" onChange={()=> setPhase(document.myPhase.phase.value)} name="phase"/>
        </form>

      </section>
      <section>
        <form name="myClass">
          <label>Druid</label>
            <input type="radio" label="Druid" value="Druid" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label>Hunter</label>
            <input type="radio" label="Hunter" value="Hunter" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label>Mage</label>
            <input type="radio" label="Mage" value="Mage" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label>Paladin</label>
            <input type="radio" label="Paladin" value="Paladin" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label>Priest</label>
            <input type="radio" label="Priest" value="Priest" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label>Rogue</label>
            <input type="radio" label="Rogue" value="Rogue" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label>Shaman</label>
            <input type="radio" label="Shaman" value="Shaman" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label>Warlock</label>
            <input type="radio" label="Warlock" value="Warlock" name="class" onChange={()=> setClass(document.myClass.class.value)} />
          <label>Warrior</label>
            <input type="radio" label="Warrior" value="Warrior" name="class" onChange={()=> setClass(document.myClass.class.value)} />
        </form>
      </section>
        {chosenClass && classWork.Warrior.options ? 
          <section>
          <form name="mySpec">
            {classWork.Warrior.options.map((x) => {
              return (
              <React.Fragment>
              <label>{x}</label>
              <input type="radio" label={x} value={x} onChange={() => setSpec(x)}/>
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
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.head : "" }> <img src={head}></img> </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.neck : "" }> <img src={neck}></img> </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.shoulder : "" }> <img src={shoulder}></img> </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.back : "" }> <img src={back}></img> </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.chest : "" }> <img src={chest}></img> </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.wrist : "" }> <img src={wrist}></img> </a> 
          </div>

          {/* This is the bottom section of the character/gear screen */}

          <div className="bottom-gear">
          <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.mainhand : "" }> <img src={mainhand}></img> </a> 
          <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.offhand : "" }> <img src={offhand}></img> </a> 
          </div>
          
          {/* This is right side section of the character/gear screen */}

          <div className="right-gear">
          <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.hands : "" }> <img src={glove}></img> </a> 
          <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.waist : "" }> <img src={waist}></img> </a> 
          <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.legs : "" }> <img src={legs}></img> </a> 
          <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.boots : "" }> <img src={boots}></img> </a> 
          <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.ring1 : "" }> <img src={finger}></img> </a> 
          <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.ring2 : "" }> <img src={finger}></img> </a> 
          <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.trinket1 : "" }> <img src={trinket}></img> </a> 
          <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.trinket2 : "" }> <img src={trinket}></img> </a> 

          </div>
        </div>
      </div>
    </div>
  )
}

export default GearDisplay
