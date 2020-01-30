import React from "react"
import Layout from "./../components/layout"
import { Card, CardGroup } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <CardGroup>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <Card
              style={{ width: "18rem", marginRight: "30px" }}
              key={edge.node.id}
            >
              <Card.Body>
                <Card.Title>{edge.node.frontmatter.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>{edge.node.excerpt}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                {edge.node.frontmatter.date}
              </Card.Footer>
            </Card>
          )
        })}
      </CardGroup>
    </Layout>
  )
}

export default BlogPage
