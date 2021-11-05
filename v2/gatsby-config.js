module.exports = {
  siteMetadata: {
    title: "Adelana Onafuwa",
    description:
      "Portfolio and personal website of Adelana Onafuwa. Software Developer and JavaScript fan.",
    twitter: "@Ade_LaNa",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logos",
        path: `${__dirname}/static/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "adelana.dev",
        short_name: "adelana",
        start_url: "/",
        description:
          "Portfolio and personal website of Adelana Onafuwa. Software Developer and JavaScript fan.",
        lang: "en",
        orientation: "portrait",
        background_color: "#fff",
        theme_color: "#0b25a8",
        display: "standalone",
        icon: "static/logo.svg",
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
    "gatsby-plugin-offline",
  ],
};
