import * as React from "react"
import Layout from "../../../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import Seo from "../../../components/seo"

import {
  cardContainer,
  cardImage,
  cardData,
  cardTitle,
  cardSubtitle,
} from "./card.module.css"

const CardsPage = ({ data }) => {
  const {
    title: fullCardName,
    slug,
    cardFields: card,
    cardTypes: types,
  } = data.wpCard
  const {
    pokemon,
    hp,
    rarity,
    rarityType,
    holo,
    releaseYear,
    illustrator,
    set,
    cardNumber,
  } = card
  const image = getImage(card.cardImage.localFile)
  const cardName = fullCardName.slice(0, fullCardName.indexOf("("))
  return (
    <Layout pageTitle={fullCardName}>
      <div key={slug} className={cardContainer}>
        <GatsbyImage
          image={image}
          alt={cardName}
          width={"250px"}
          className={cardImage}
        />
        <div className={cardData}>
          <table>
            <tbody>
              <tr>
                <th>
                  <h1 className={cardTitle}>{pokemon}</h1>
                </th>
                <td>
                  <h2 className={cardSubtitle}>
                    {types.nodes.map(type => {
                      switch (type.name.toLowerCase()) {
                        case "water":
                          return (
                            <StaticImage
                              src="../../../images/energy_water.png"
                              alt="water icon"
                            />
                          )
                        case "fire":
                          return (
                            <StaticImage
                              src="../../../images/energy_fire.png"
                              alt="fire icon"
                            />
                          )
                        case "lightning":
                          return (
                            <StaticImage
                              src="../../../images/energy_lightning.png"
                              alt="lightning icon"
                            />
                          )
                        case "metal":
                          return (
                            <StaticImage
                              src="../../../images/energy_metal.png"
                              alt="metal icon"
                            />
                          )
                        case "darkness":
                          return (
                            <StaticImage
                              src="../../../images/energy_darkness.png"
                              alt="darkness icon"
                            />
                          )
                        default:
                          return (
                            <StaticImage
                              src="../../../images/energy_unknown.png"
                              alt="unknown icon"
                            />
                          )
                      }
                    })}
                  </h2>
                </td>
              </tr>
              <tr>
                <th>HP</th>
                <td>{hp}</td>
              </tr>
              <tr>
                <th>Rarity</th>
                <td>{rarity}</td>
              </tr>
              <tr>
                <th>Rarity Type</th>
                <td>{rarityType}</td>
              </tr>
              <tr>
                <th>Holo</th>
                <td>{holo ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <th>Release Year</th>
                <td>{releaseYear}</td>
              </tr>
              <tr>
                <th>Illustrator</th>
                <td>{illustrator}</td>
              </tr>
              <tr>
                <th>Set</th>
                <td>{set}</td>
              </tr>
              <tr>
                <th>Card Number</th>
                <td>{cardNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    wpCard(slug: { eq: $slug }) {
      title
      slug
      cardFields {
        pokemon
        cardImage {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
        hp
        rarity
        rarityType
        holo
        releaseYear
        illustrator
        set
        cardNumber
      }
      cardTypes {
        nodes {
          name
        }
      }
    }
  }
`

export const Head = ({data}) => <Seo title={data.wpCard.title} />

export default CardsPage
