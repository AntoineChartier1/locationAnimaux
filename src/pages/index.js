import * as React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'


const IndexPage = () => {
  return (

    <Layout pageTitle="Accueil">
      <p>je suis la page d'acceuil avec un build</p>
    </Layout>

  )
}

export default IndexPage

export const Head = () => <Seo title={"Accueil"}/>
