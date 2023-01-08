import * as React from "react"
import Layout from "../components/layout"
import CardGrid from "../components/cardGrid"
import Seo from "../components/seo"

const CardsPage = ({ pageContext }) => {
  const cards = pageContext.cards
  const selectedPokemon = pageContext.pokemon
  const selectedPokemonString =
    selectedPokemon === "both"
      ? "Magikarp & Gyarados"
      : selectedPokemon.charAt(0).toUpperCase() + selectedPokemon.slice(1)
  cards.sort((a, b) => {
    return b.node.cardFields.pokemon > a.node.cardFields.pokemon
      ? -1
      : a.node.cardFields.pokemon
      ? 1
      : 0
  })

  return (
    <Layout pageTitle={`${selectedPokemonString} Cards`}>
      <p>A list of {selectedPokemonString} Pokemon Cards.</p>
      <CardGrid cards={cards} filter={selectedPokemon} />
    </Layout>
  )
}

export const Head = ({ pageContext }) => <Seo title={`${  pageContext.pokemon === "both"
? "Magikarp & Gyarados"
: pageContext.pokemon.charAt(0).toUpperCase() + pageContext.pokemon.slice(1)} Cards`} />

export default CardsPage
