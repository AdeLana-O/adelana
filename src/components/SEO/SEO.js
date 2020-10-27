import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

function SEO({ seo, pageDescription, pageTitle }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query);
  const { pathname } = useLocation();

  const { title, description, siteUrl, imageUrl, twitter } = siteMetadata;
  const urlPath = siteUrl + pathname;

  const metaTitle = pageTitle ? `${pageTitle} | ${title}` : title;
  const metaDescription = pageDescription || description;

  return (
    <Helmet>
      <html lang="en" />
      <title>{metaTitle}</title>
      <meta name="robots" content={seo ? "index,follow" : "noindex,nofollow"} />
      <meta name="author" content={title} />
      <meta name="description" content={metaDescription} />
      {seo && <meta name="og:title" content={metaTitle} />}
      {seo && <meta name="og:description" content={metaDescription} />}
      {seo && <meta name="og:url" content={urlPath} />}
      {seo && <meta name="og:type" content="website" />}
      {seo && <meta name="og:image" content={imageUrl} />}
      {seo && <meta name="twitter:title" content={metaTitle} />}
      {seo && <meta name="twitter:description" content={metaDescription} />}
      {seo && <meta name="twitter:site" content={twitter} />}
      {seo && <meta name="twitter:creator" content={twitter} />}
      {seo && <meta name="twitter:card" content="summary_large_image" />}
      {seo && <meta name="twitter:image" content={imageUrl} />}
      {seo && <meta itemprop="name" content={metaTitle} />}
      {seo && <meta itemprop="description" content={metaDescription} />}
      {seo && <meta itemprop="image" content={imageUrl} />}
      {seo && <link rel="canonical" href={urlPath} />}
    </Helmet>
  );
}

const query = graphql`
  query siteMetaData {
    site {
      siteMetadata {
        title
        description
        siteUrl
        imageUrl
        twitter
      }
    }
  }
`;

SEO.propTypes = {
  seo: PropTypes.bool,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
