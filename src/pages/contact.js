import * as React from "react"
import Layout from "../components/layout"
import { aboutContainer } from "./about.module.css"
import Seo from "../components/seo"

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Us">
      <div className={aboutContainer}>
        <form name="contact" method="POST" data-netlify="true">
          <label for="firstName">First Name:</label>
          <br />
          <input type="text" id="firstName" name="firstName" />
          <br />
          <label for="lastName">Last Name:</label>
          <br />
          <input type="text" id="lastName" name="lastName" />
          <br />
          <label for="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />
          <label for="subject">Subject:</label>
          <br />
          <input type="text" id="subject" name="subject" />
          <br />
          <label for="message">Message:</label>
          <br />
          <textarea id="message" name="message" rows="5" cols="30"></textarea>
          <br />
          <input type="hidden" name="form-name" value="contact" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage
