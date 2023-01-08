import * as React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import {
  descriptionBox,
  featuredCards,
  cardStyle,
  magikarp,
  gyarados,
  imgstyle,
  textstyle,
} from "./index.module.css"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"


const IndexPage = ({ data }) => {
  const homePage = data.wpPage.homePageFields
  const title = homePage.title
  const description = homePage.description
  const image = getImage(homePage.picture.localFile)
  const randomFeaturedCards = homePage.featuredCards
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)
  return (
    <Layout pageTitle={`Welcome to ${title}!`}>
      <div className={descriptionBox}>
        <GatsbyImage
          alt="Usefuless Logo"
          image={image}
          height={"300px"}
          className={imgstyle}
        />
        <p className={textstyle}>{description}</p>
      </div>
      <h2>Featured Cards:</h2>
      <div className={featuredCards}>
        {randomFeaturedCards.map(item => {
          const { title: cardName, cardFields: card, slug } = item
          const image = getImage(card.cardImage.localFile)
          const pokemon = card.pokemon
          return (
            <div key={slug} className={cardStyle}>
              <Link to={`cards/${pokemon.toLowerCase()}/${slug}`}>
                <GatsbyImage image={image} alt={cardName} />
                <p
                  className={pokemon === "Magikarp" ? magikarp : gyarados}
                  key={cardName}
                >
                  {cardName}
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "home" }) {
      homePageFields {
        title
        description
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(height: 900)
            }
          }
        }
        featuredCards {
          ... on WpCard {
            title
            slug
            cardFields {
              pokemon
              cardImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 250)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export const Head = () => <Seo/>

export default IndexPage
