import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query siteMetaData {
    site {
      siteMetadata {
        title
        description
        siteUrl
        twitter
      }
    }
  }
`;

function Seo({ seo, pageDescription, pageTitle }) {
  const { site } = useStaticQuery(query);
  const { pathname } = useLocation();

  const { title, description, siteUrl, twitter } = site.siteMetadata;

  const metaTitle = pageTitle ? `${pageTitle} | ${title}` : title;
  const metaDescription = pageDescription || description;

  const isDemo = siteUrl.includes("demo");
  const imageUrl = `${siteUrl}/logo.svg`;
  const pageUrl = `${siteUrl}${pathname}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{metaTitle}</title>
      <meta
        name="robots"
        content={
          isDemo ? "noindex, nofollow" : seo ? "index, follow" : "noindex, follow"
        }
      />
      <meta name="author" content={title} />
      <meta name="description" content={metaDescription} />
      {seo && <meta name="og:title" content={metaTitle} />}
      {seo && <meta name="og:description" content={metaDescription} />}
      {seo && <meta name="og:url" content={pageUrl} />}
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
      {seo && <link rel="canonical" origin={pageUrl} />}
    </Helmet>
  );
}

Seo.propTypes = {
  seo: PropTypes.bool,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default Seo;
