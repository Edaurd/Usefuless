import * as React from "react"
import { Link } from "gatsby"

import {
  container,
  nav,
  navLinks,
  navLinkItem,
  navLinkText,
  navLogo,
} from "./layout.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav className={nav}>
        <StaticImage src="../images/logo.png" alt="Logo" className={navLogo} />
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/cards">
              Cards
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
