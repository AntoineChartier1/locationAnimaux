import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { container } from './layout.module.css'
import Header from "./header"

const Layout = ({ pageTitle, children }) => {


    return (
        <div className={container} >
            <Header />
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
