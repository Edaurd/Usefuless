exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWpCard {
        distinct(field: cardFields___pokemon)
        edges {
          node {
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
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allWpCard.distinct

  createPage({
    path: `/cards`,
    component: require.resolve("./src/templates/cards.js"),
    context: {
      pokemon: "both",
      cards: result.data.allWpCard.edges,
    },
    defer: false,
  })

  posts.forEach(pokemon => {
    pokemon = pokemon.toLowerCase()
    createPage({
      path: `/cards/${pokemon}`,
      component: require.resolve("./src/templates/cards.js"),
      context: {
        pokemon: pokemon,
        cards: result.data.allWpCard.edges,
      },
      defer: false,
    })
  })
}
