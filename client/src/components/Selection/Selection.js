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
          <label>Warrior</label>
          <input type="radio" label="Warrior" value="Warrior" name="class"/>
          <label>Druid</label>
          <input type="radio" label="Druid" value="Druid" name="class"/>
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