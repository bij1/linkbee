import React from "react"
import { graphql } from 'gatsby'
import Page from "../components/page.js"

export default function Home({ data }) {
  return (
      <Page
          user={{
              name: "test",
              avatar: "test.jpg"
          }}
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
  }
`
