import React, { useState, useEffect } from "react"
import GearDisplay from "../GearDisplay/GearDisplay"
import classWork from "../../wowhead/classData"

const MainSelector = () => {

        const [chosenClass, setClass] = useState(null)
        const [chosenPhase, setPhase] = useState(null)
        const [chosenSpec, setSpec] = useState(null)
      
        useEffect(() => {
          if(chosenSpec) {
            setSpec(null)
          }
      
        }, [chosenClass])
      
    return (
        <div>
          <div>
            <section>
    
              <form name="myPhase" className="radio-toolbar phaseChooser">
                <input id="radioP1" type="radio" label="Phase 1" value="Phase1" onChange={() => setPhase(document.myPhase.phase.value)} name="phase" />
                <label htmlFor="radioP1">Phase 1</label>
    
                <input id="radioP2" type="radio" label="Phase 2" value="Phase2" onChange={() => setPhase(document.myPhase.phase.value)} name="phase" />
                <label htmlFor="radioP2">Phase 2</label>
    
                <input id="radioP3" type="radio" label="Phase 3" value="Phase3" onChange={() => setPhase(document.myPhase.phase.value)} name="phase" />
                <label htmlFor="radioP3">Phase 3</label>
    
                <input id="radioP4" type="radio" label="Phase 4" value="Phase4" onChange={() => setPhase(document.myPhase.phase.value)} name="phase" />
                <label htmlFor="radioP4">Phase 4</label>
    
                <input id="radioP5" type="radio" label="Phase 5" value="Phase5" onChange={() => setPhase(document.myPhase.phase.value)} name="phase" />
                <label htmlFor="radioP5">Phase 5</label>
    
                <input id="radioP6" type="radio" label="Phase 6" value="Phase6" onChange={() => setPhase(document.myPhase.phase.value)} name="phase" />
                <label htmlFor="radioP6">Phase 6</label>
              </form>
    
            </section>
            <section>
              <form name="myClass" className="radio-toolbar classChooser">
    
                <input id="druidRadio" type="radio" label="Druid" value="Druid" name="class" onChange={
                  () => {setClass(document.myClass.class.value); setSpec(null)} }/>
                <label htmlFor="druidRadio">Druid</label>
    
                <input id="hunterRadio" type="radio" label="Hunter" value="Hunter" name="class" onChange={() => {setClass(document.myClass.class.value); setSpec(null)}}/>
                <label htmlFor="hunterRadio">Hunter</label>
    
                <input id="mageRadio" type="radio" label="Mage" value="Mage" name="class" onChange={() => {setClass(document.myClass.class.value); setSpec(null)} }/>
                <label htmlFor="mageRadio">Mage</label>
    
                <input id="paladinRadio" type="radio" label="Paladin" value="Paladin" name="class" onChange={() => {setClass(document.myClass.class.value); setSpec(null)} }/>
                <label htmlFor="paladinRadio">Paladin</label>
    
                <input id="priestRadio" type="radio" label="Priest" value="Priest" name="class" onChange={() => {setClass(document.myClass.class.value); setSpec(null)} } />
                <label htmlFor="priestRadio">Priest</label>
    
                <input id="rogueRadio" type="radio" label="Rogue" value="Rogue" name="class" onChange={() => {setClass(document.myClass.class.value); setSpec(null)} } />
                <label htmlFor="rogueRadio">Rogue</label>
    
                <input id="shamanRadio" type="radio" label="Shaman" value="Shaman" name="class" onChange={() => {setClass(document.myClass.class.value); setSpec(null)} } />
                <label htmlFor="shamanRadio">Shaman</label>
    
                <input id="warlockRadio" type="radio" label="Warlock" value="Warlock" name="class" onChange={() => {setClass(document.myClass.class.value); setSpec(null)} } />
                <label htmlFor="warlockRadio">Warlock</label>
    
                <input id="warriorRadio" type="radio" label="Warrior" value="Warrior" name="class" onChange={() => {setClass(document.myClass.class.value); setSpec(null)} } />
                <label htmlFor="warriorRadio">Warrior</label>
              </form>
            </section>
    
            {/* This will list all available specs for the chosen class (chosenClass). User selects the class to use for display purposes */}
            {
              chosenClass && classWork[chosenClass].options ?
                <section>
                  <form name="mySpec" className="radio-toolbar specChooser">
                    {classWork[chosenClass].options.map((specOptions) => {
                      return (
                        <React.Fragment key={specOptions}>
                          <input name="mySpec" id={specOptions} type="radio" label={specOptions} value={specOptions} onChange={() => setSpec(specOptions)} />
                          <label htmlFor={specOptions}>{specOptions}</label>
                        </React.Fragment>
                      )
                    })}
                  </form>
                </section> : <section></section>
    
            }
          </div>
          <GearDisplay chosenClass={chosenClass} chosenSpec={chosenSpec} chosenPhase={chosenPhase}/>
        </div>
        
    )
}

export default MainSelector