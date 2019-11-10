import  React, { useState } from "react";
import classWork from "../../wowhead/classData"

const Selection = () => {
  // const [selectedClass, updateClass] = useState(null)

  return(
    <div>
      
      <section>
        
        <form>
          <label>Phase 1</label>
            <input type="radio" label="Druid" value="Druid" name="class"/>
          <label>Phase 2</label>
            <input type="radio" label="Hunter" value="Hunter" name="class"/>
          <label>Phase 3</label>
            <input type="radio" label="Mage" value="Mage" name="class"/>
          <label>Phase 4</label>
            <input type="radio" label="Paladin" value="Paladin" name="class"/>
          <label>Phase 5</label>
            <input type="radio" label="Priest" value="Priest" name="class"/>
          <label>Phase 6</label>
            <input type="radio" label="Rogue" value="Rogue" name="class"/>
          <label>Phase 6</label>
            <input type="radio" label="Shaman" value="Shaman" name="class"/>
          <label>Phase 6</label>
            <input type="radio" label="Warlock" value="Warlock" name="class"/>
            <label>Phase 6</label>
            <input type="radio" label="Warrior" value="Warrior" name="class"/>
        </form>

      </section>
      <section>
        <form name="myClass">
          <label>Druid</label>
            <input type="radio" label="Druid" value="Druid" name="class"/>
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
      </section>
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