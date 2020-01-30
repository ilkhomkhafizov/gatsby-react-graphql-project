import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="text-center fixed-bottom">
      <h5>Created by {data.site.siteMetadata.author}</h5>
    </footer>
  )
}

export default Footer
