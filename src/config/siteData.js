import { useStaticQuery, graphql } from "gatsby";

const useSiteMetaData = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteData {
        site {
          siteMetadata {
            title
            description
            siteUrl
            imageUrl
            twitter
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetaData;
