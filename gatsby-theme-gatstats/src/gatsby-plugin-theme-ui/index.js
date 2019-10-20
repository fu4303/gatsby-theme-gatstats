const headings = {
  color: 'text',
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'normal',
  wordBreak: 'break-all',
  margin: 0
}

export default {
  space: [0, 4, 8, 16, 24, 32],

  radii: [4, 8, 50],

  borderWidths: [1, 2, 3],

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },

  initialColorModeName: 'light',
  colors: {
    text: '#444444',
    textLight: '#999999',
    textDark: '#333333',

    primary: '#3ed9c0',
    secondary: '#6acbac',
    surface: '#ffffff',
    background: '#eeeeee',

    modes: {
      dark: {
        text: '#ffffff',
        textLight: '#59587b',
        textDark: '#272643',

        primary: '#ec3cbd',
        secondary: '#c456d9',
        surface: '#201f3b',
        background: '#131127'
      }
    }
  },

  breakpoints: ['576px', '768px', '992px', '1200px'],

  shadows: [
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.20)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.19)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.19)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.18)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.17)'
  ],

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'normal'
    },

    // Layout: {
    //   position: 'relative',
    //   color: 'text',
    //   bg: 'background'
    // },

    h1: {
      ...headings,
      marginBottom: 3,
      fontSize: [6, 7, 8]
    },

    h2: {
      ...headings,
      marginBottom: 3,
      fontSize: [5, 7]
    },

    h3: {
      ...headings,
      marginBottom: 3,
      fontSize: [4, 6]
    },

    h4: {
      ...headings,
      marginBottom: 3,
      fontSize: [2, 5]
    },

    h5: {
      ...headings,
      marginBottom: 2,
      fontSize: [2, 4]
    },

    h6: {
      ...headings,
      marginBottom: 2,
      fontSize: [1, 2],
      fontWeight: 'body'
    },

    p: {
      color: 'textLight',
      fontFamily: 'body',
      fontSize: [1, 2],
      fontWeight: 'body',
      lineHeight: 'body',
      marginTop: 0,
      marginBottom: 4
    },

    ul: { paddingLeft: 3 },

    ol: { paddingLeft: 3 },

    li: {
      color: 'text',
      marginBottom: 3
    },

    a: {
      color: 'secondary',
      cursor: 'pointer',
      fontSize: [1, 2],
      outline: 'none',
      borderWidth: 0,
      borderStyle: 'solid',
      transition: '.2s linear all',
      ':hover': {
        color: 'muted'
      },
      ':focus': {
        borderWidth: 0,
        borderStyle: 'dashed',
        borderColor: 'text'
      }
    },

    pre: {
      backgroundColor: 'background',
      fontFamily: 'monospace',
      fontSize: 0,
      px: 3,
      py: 3,
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: 'background'
    },

    code: {
      fontFamily: 'monospace',
      fontSize: 0
    },

    blockquote: {
      backgroundColor: 'background',
      borderLeftStyle: 'solid',
      borderLeftWidth: 4,
      borderColor: 'secondary',
      px: 3,
      py: 3,
      my: 3,
      mx: [2, 3]
    },

    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },

    tr: {},

    th: {
      backgroundColor: 'background',
      color: 'text',
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: 'muted',
      px: 2,
      py: 2
    },

    td: {
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: 'muted',
      px: 2,
      py: 2
    }
  }
}
