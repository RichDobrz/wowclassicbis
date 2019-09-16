import  React from "react";

const Selection = () => {
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
        <section className="Class-selection">
          <label>
            Rogue
            <input type="radio" value="Rogue" name="class"></input>
          </label>
          <label>
            Druid
            <input type="radio" value="Druid" name="class"></input>
          </label>
        </section>
      </div>
  )
}

export default Selection