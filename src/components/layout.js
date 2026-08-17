import * as React from "react"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div className="flex min-h-screen flex-col bg-paper">
    <a className="skip-link" href="#main">
      Skip to main content
    </a>
    <Nav />
    <main id="main" className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
