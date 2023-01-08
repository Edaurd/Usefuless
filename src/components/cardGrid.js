import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import FilterButtons from "./filterButtons"

import { cardGrid, cardStyle, magikarp, gyarados } from "./cardGrid.module.css"

const CardGrid = ({ cards, filter }) => {
  const subPath = filter === "both" ? true : false
  return (
    <>
      <FilterButtons filter={filter} />
      <div className={cardGrid}>
        {cards.map(item => {
          const { title: cardName, cardFields: card, slug } = item.node
          const image = getImage(card.cardImage.localFile)
          const pokemon = card.pokemon
          if (filter === "both" || filter === card.pokemon.toLowerCase()) {
            return (
              <div key={slug} className={cardStyle}>
                <Link to={`${subPath ? pokemon.toLowerCase() : "."}/${slug}`}>
                  <GatsbyImage image={image} alt={cardName} width={"250px"} />{" "}
                  <p
                    className={pokemon === "Magikarp" ? magikarp : gyarados}
                    key={cardName}
                  >
                    {cardName}
                  </p>
                </Link>
              </div>
            )
          } else return ""
        })}
      </div>
    </>
  )
}

export default CardGrid
