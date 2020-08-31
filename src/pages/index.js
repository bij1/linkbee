import React from "react"
import { graphql } from 'gatsby'
import Page from "../components/page.js"

export default function Home({ data }) {
  return (
      <Page
          user={data.site.siteMetadata.user}
          links={data.wings.menu.items}
      />
  )
}

export const query = graphql`
  query {
    wings {
      menu(selector: {id: {eq: "GJ2j4JxMRlF9vXpZOoQO"}}) {
        items {
          text
          url
        }
      }
    }
    site {
      siteMetadata {
        user {
          name
          link
          avatar
        }
      }
    }
  }
`
