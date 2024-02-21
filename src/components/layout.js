import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { container } from './layout.module.css'
import Header from "./header"

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <div className={container} >
            <header>{data.site.siteMetadata.title}</header>
            <meta name="description" content="Your description" />
            <Header />
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
