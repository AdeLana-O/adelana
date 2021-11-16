const description =
  "Portfolio and personal website of Adelana Onafuwa. Software Developer and JavaScript fan.";

module.exports = {
  siteMetadata: {
    title: "Adelana Onafuwa",
    description,
    siteUrl: "https://demo-devlana.netlify.app",
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
        name: "projectsData",
        path: `${__dirname}/src/data`,
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
        description,
        lang: "en",
        orientation: "portrait",
        background_color: "#ebf1f9",
        theme_color: "#315fa8",
        display: "standalone",
        icon: "static/logo.svg",
        icon_options: {
          purpose: "maskable",
        },
      },
    },
    "gatsby-plugin-offline",
  ],
};
