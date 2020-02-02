import React from "react"
import { Link } from "gatsby"
import Layout from "./../components/layout"
import Head from "./../components/head"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.sass"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello,</h1>
        <h2>I'm Ilkhom, a Web developer from Uzbekistan!</h2>
        <p>
          If you want contact with me, <Link to="/contact">click this</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
