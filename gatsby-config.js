module.exports = {
  siteMetadata: {
    title: "Adelana Onafuwa",
    description: "Portfolio and personal website of Adelana Onafuwa. Software Developer and JavaScript fan.",
    siteUrl: "https://adelana.dev",
    imageUrl: "https://adelana.dev/logo.svg",
    twitter: "@Ade_LaNa",
    navLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Work",
        link: "/work",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "adelana.dev",
        short_name: "adelana",
        start_url: "/",
        description: "Portfolio and personal website of Adelana Onafuwa. Software Developer and JavaScript fan.",
        lang: "en",
        orientation: "portrait",
        background_color: "#fff",
        theme_color: "#0b25a8",
        display: "standalone",
        icon: "static/logo.svg",
        icon_purpose: "any maskable"
      },
    },
    "gatsby-plugin-offline",
  ],
};
