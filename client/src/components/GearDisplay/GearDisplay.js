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
        
        {
          chosenClass && classWork.Warrior.options ? 
          <section>
            <form name="mySpec">
              {classWork.Warrior.options.map((specOptions) => {
                return (
                <React.Fragment>
                <label>{specOptions}</label>
                <input type="radio" label={specOptions} value={specOptions} onChange={() => setSpec(specOptions)}/>
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
            <a href="#" className="headLink" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.head.link : "" }>
              {
                chosenPhase && chosenClass ? 
                <img className="coloredBG" src="https://wow.zamimg.com/images/wow/icons/large/inv_helmet_36.jpg"></img> :
                <img src={head}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.neck : "" }>
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_talisman_07.jpg"></img> :
                <img src={neck}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.shoulder : "" }> 
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_10.jpg"></img> :
                <img src={shoulder}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.back : "" }>
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_misc_cape_20.jpg"></img> :
                <img src={back}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.chest : "" }>
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_chest_chain_15.jpg"></img> :
                <img src={chest}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.wrist : "" }>
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_bracer_17.jpg"></img> :
                <img src={wrist}></img>
              }
            </a> 
          </div>
          {/* This is the bottom section of the character/gear screen */}

          <div className="bottom-gear">
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.mainhand : "" }>
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbrand.jpg"></img> :
                <img src={mainhand}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.offhand : "" }> 
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_sword_34.jpg"></img> :
                <img src={offhand}></img>
              }
            </a> 
          </div>
          
          {/* This is right side section of the character/gear screen */}

          <div className="right-gear">
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.hands : "" }>
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_gauntlets_26.jpg"></img> :
                <img src={glove}></img>
              } 
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.waist : "" }>
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_belt_33.jpg"></img> :
                <img src={waist}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.legs : "" }>
             {
               chosenPhase && chosenClass ?
               <img src="https://wow.zamimg.com/images/wow/icons/large/inv_pants_wolf.jpg"></img> :
               <img src={legs}></img>
             }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.boots : "" }>
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_boots_01.jpg"></img> :
                <img src={boots}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.ring1 : "" }>
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_17.jpg"></img> :
                <img src={finger}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.ring2 : "" }>
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_13.jpg"></img> :
                <img src={finger}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.trinket1 : "" }>
              {
                chosenPhase && chosenClass ?
                <img src="https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_talisman_01.jpg"></img> :
                <img src={trinket}></img>
              }
            </a> 
            <a href="#" data-wowhead={ chosenPhase && chosenClass ? classWork.Warrior.fury.trinket2 : "" }>
              {
                chosenPhase && chosenClass ?
                <img  className="coloredBG" src="https://wow.zamimg.com/images/wow/icons/large/inv_misc_armorkit_09.jpg"></img> :
                <img src={trinket}></img>
              }
            </a> 

          </div>
        </div>
      </div>
    </div>
  )
}

export default GearDisplay
