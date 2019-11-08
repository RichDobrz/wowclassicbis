import  React, { useState } from "react";
import classWork from "../../wowhead/classData"

const Selection = () => {
  // const [selectedClass, updateClass] = useState(null)

  return(
    <div>
      <section>
          <label>
            Phase 1
            <input type="radio" value="Phase 1" name="phase"></input>
          </label>
          <label>
            Phase 2
            <input type="radio" value="Phase 2" name="phase"></input>
          </label>
          <label>
            Phase 3
            <input type="radio" value="Phase 3" name="phase"></input>
          </label>
          <label>
            Phase 4
            <input type="radio" value="Phase 4" name="phase"></input>
          </label>
          <label>
            Phase 5
            <input type="radio" value="Phase 5" name="phase"></input>
          </label>
          <label>
            Phase 6
            <input type="radio" value="Phase 6" name="phase"></input>
          </label>
        </section>
        <form name="myClass">
          <label>Druid</label>
          <input type="radio" label="Warrior" value="Druid" name="class"/>
          <label>Hunter</label>
          <input type="radio" label="Hunter" value="Hunter" name="class"/>
          <label>Mage</label>
          <input type="radio" label="Mage" value="Mage" name="class"/>
          <label>Paladin</label>
          <input type="radio" label="Paladin" value="Paladin" name="class"/>
          <label>Priest</label>
          <input type="radio" label="Priest" value="Priest" name="class"/>
          <label>Rogue</label>
          <input type="radio" label="Rogue" value="Rogue" name="class"/>
          <label>Shaman</label>
          <input type="radio" label="Shaman" value="Shaman" name="class"/>
          <label>Warlock</label>
          <input type="radio" label="Warlock" value="Warlock" name="class"/>
          <label>Warrior</label>
          <input type="radio" label="Warrior" value="Warrior" name="class"/>
        </form>
        {/* onChange={()=> updateClass("Druid")} */}
        {/* onChange={()=> updateClass("Warrior")}  */}
        
        {/* <form name="formOne">
          <section className="Class-selection">
            <label>
              Warrior
              <input type="radio" value="Warrior" name="class"></input>
            </label>
            <label>
              Druid
              <input type="radio" value="Druid" name=""></input>
            </label>
          </section>
        </form> */}
      </div>
  )
}

export default Selection