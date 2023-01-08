import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { button } from "./filterButtons.module.css"

//ik wist niet wat beter te gebruiken als een kruisje als unselect

const FilterButtons = ({ filter }) => {
  return (
    <div className={button}>
      Filter:
      {filter === "both" ? (
        <>
          <Link to="./magikarp">
            <StaticImage
              src="../images/magikarp_sprite.png"
              alt="Magikarp icon"
            />
          </Link>
          <Link to="./gyarados">
            <StaticImage
              src="../images/gyarados_sprite.png"
              alt="Gyarados icon"
            />
          </Link>
        </>
      ) : filter !== "magikarp" ? (
        <>
          <Link to="../magikarp">
            <StaticImage
              src="../images/magikarp_sprite.png"
              alt="Magikarp icon"
            />
          </Link>
          <Link to="../">
            <StaticImage src="../images/unselect.png" alt="unselect icon" />
          </Link>
        </>
      ) : (
        <>
          <Link to="../">
            <StaticImage src="../images/unselect.png" alt="unselect icon" />
          </Link>
          <Link to="../gyarados">
            <StaticImage
              src="../images/gyarados_sprite.png"
              alt="Gyarados icon"
            />
          </Link>
        </>
      )}
    </div>
  )
}

export default FilterButtons
