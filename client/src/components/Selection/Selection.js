import  React, { useState, useEffect } from "react";
import classWork from "../../wowhead/classData"

const Selection = () => {
  const [chosenClass, setClass] = useState(null)
  const [chosenPhase, setPhase] = useState(null)
  
  useEffect(() => {
    console.log(chosenClass)
    console.log(chosenPhase)
  })

  return(
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
      </div>
  )
}

export default Selection