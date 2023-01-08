import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import {
  aboutContainer,
  aboutText,
  aboutImage,
  textContainer,
} from "./about.module.css"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
      <div className={aboutContainer}>
        <div className={aboutText}>
          <div className={textContainer}>
            <h2>Why is this?</h2>
            <p>
              I built this website because my favorite Pokemon is Gyarados. To
              me, Gyarados represents the idea that no matter how weak or
              useless you may feel, you have the potential to become powerful
              and succeed. The fact that Gyarados evolves from Magikarp, one of
              the weakest and most useless Pokemon, only adds to its
              inspirational value.
            </p>
          </div>
          <div className={textContainer}>
            <h2>What is this?</h2>
            <p>
              This website is a tribute to the beloved Magikarp and Gyarados
              Pokemon TCG cards. As a dedicated fan of these amazing creatures,
              I wanted to create a platform where fellow trainers could come and
              discover more about these cards and the lore surrounding them.
              From rare and hard-to-find collectibles to more common cards that
              are still worth adding to your collection, this website aims to
              provide a comprehensive overview of everything Magikarp and
              Gyarados TCG. Whether you're an avid collector or just looking for
              a fun and informative way to learn more about these iconic
              Pokemon, I hope you find what you're looking for here at Usefuless
            </p>
          </div>
          <div className={textContainer}>
            <h2>Who is this?</h2>
            <p>
              Usefuless was founded in 3023 by founder, 𝙹ᒲ╎ᓵ∷𝙹リ !¡ᒷ∷ᓭᒷ╎ ᒷ╎⊣⍑ℸ ̣.
              after the Omicronians took over this planet they managed to create
              a profound obsession over Magikarp's Useles and Gyarados's Useful
              abilities and their Pokemon card equivalants.
            </p>
          </div>
        </div>
        <div className={aboutImage}>
          <StaticImage src="../images/about.png" />
        </div>
      </div>
    </Layout>
  )
}


export const Head = () => <Seo title="about" />

export default AboutPage
