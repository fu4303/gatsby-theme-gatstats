const transitions = {
  transition: ".1s linear all",
}

const headings = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "1.2",
  fontWeight: "heading",
  margin: 0,
  ...transitions,
}

const pseudo = {
  color: "primary",
  "::before": {
    content: '"./"',
    color: "success",
  },
  "::after": {
    content: '"~"',
    color: "secondary",
  },
}

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  initialColorMode: "light",

  colors: {
    text: "#f8f8f2",
    background: "#282a36",
    primary: "#ff79c6",
    secondary: "#8be9fd",
    success: "#50fa7b",
    error: "#ff5555",
    warning: "#f1fa8c",
    muted: "#6272a4",
    modes: {
      dark: {
        text: "#353535",
        background: "#ECEBF2",
        primary: "#E64869",
      },
    },
  },

  breakpoints: ["576px", "768px", "992px", "1200px"],

  shadows: [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  ],

  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },

    Header: {
      padding: [3, 4],
      fontSize: 4,
      justifyContent: "space-between",
      color: "text",
      bg: "background",
    },

    Layout: {
      color: "text",
      bg: "background",
    },

    Container: {
      padding: [3, 4],
    },

    Footer: {
      padding: 4,
    },

    h1: {
      ...headings,
      marginBottom: 3,
      fontSize: 7,
    },

    h2: {
      ...headings,
      marginBottom: 3,
      fontSize: 6,
    },

    h3: {
      ...headings,
      ...pseudo,
      color: "primary",
      marginBottom: 3,
      fontSize: 4,
    },

    h4: {
      ...headings,
      marginBottom: 3,
      fontSize: 4,
    },

    h5: {
      ...headings,
      marginBottom: 1,
      fontWeight: "body",
      fontSize: 1,
      color: "secondary",
    },

    h6: {
      ...headings,
      marginBottom: 1,
      fontWeight: "body",
      fontSize: 1,
      color: "muted",
    },

    p: {
      color: "text",
      fontFamily: "body",
      fontSize: 2,
      fontWeight: "body",
      lineHeight: "body",
      marginTop: 0,
      marginBottom: 4,
      a: {
        color: "primary",
      },
    },

    ul: {
      paddingLeft: 20,
      margin: 0,
    },

    ol: {
      paddingLeft: 20,
      margin: 0,
    },

    li: {
      color: "text",
      marginBottom: 3,
    },

    a: {
      color: "muted",
      ...transitions,
      ":hover": {
        color: "text",
      },
    },

    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },

    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },

    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },

    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },

    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
}