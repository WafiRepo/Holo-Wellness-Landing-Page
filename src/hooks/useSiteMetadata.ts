import { useStaticQuery, graphql } from "gatsby"

export default function useSiteMetadata(): {[key: string]: string} {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}