import React from "react"
import Layout from "./../components/layout"
import { Card, CardColumns } from "react-bootstrap"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1 className="mb-5">Blog</h1>
      <CardColumns>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <Card key={edge.node.id}>
              <Card.Header>By Ilkhom</Card.Header>
              <Card.Body>
                <Card.Title>{edge.node.title}</Card.Title>
                <Link
                  to={`/blog/${edge.node.slug}`}
                  className="primary"
                  type="button"
                >
                  Go to
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted">
                {edge.node.publishedDate}
              </Card.Footer>
            </Card>
          )
        })}
      </CardColumns>
    </Layout>
  )
}

export default BlogPage
