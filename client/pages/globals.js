import { StyleSheet } from 'aphrodite/no-important';

const globalSelectorHandler = (selector, _, generateSubtreeStyles) => {
  if (selector[0] !== '*') {
    return null;
  }
  return generateSubtreeStyles(selector.slice(1));
};

const globalExtension = { selectorHandler: globalSelectorHandler };
const extended = StyleSheet.extend([globalExtension]);

const styles = extended.StyleSheet.create({
  globals: {
    '*html,body': {
      margin: 0,
      padding: 0,
      backgroundColor: '#f8f8f8',
      '-webkit-text-size-adjust': '100%',
    },
    '*button': {
      margin: 0,
      padding: 0,
      border: 0,
      background: 'none',
      fontSize: '100%',
      verticalAlign: 'baseline',
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      color: 'inherit',
      appearance: 'none',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    '*body': {
      fontSize: 16,
      fontFamily: ['"sofia-pro"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
      lineHeight: 1.4,
      color: '#3f3f48',
      margin: '0 auto',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      fontWeight: 'normal',
      boxSizing: 'border-box',
      padding: '0 16px 80px',

      '@media (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3)': {
        padding: '0 20px 80px 20px',
      },

      '@media (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3) and (orientation: landscape)': {
        padding: '0 50px 80px 50px',
      },
    },
    '*h1': {
      fontSize: 36,
      color: '#3f3f48',
      margin: 0,
      marginBottom: 10,
      fontWeight: 'inherit',

      '@media (max-width: 500px)': {
        fontSize: 24,
      },
    },
    '*h4': {
      fontSize: 32,
      color: '#3f3f48',
      margin: 0,
      marginBottom: 10,
      fontWeight: 'inherit',

      '@media (max-width: 500px)': {
        fontSize: 24,
      },
    },
    '*h3': {
      fontSize: 18,
      color: '#3f3f48',
      margin: 0,
      fontWeight: 'inherit',
    },
    '*p': {
      opacity: 0.7,
      margin: 0,
    },

    '*a': {
      color: 'inherit',
    },

    '*svg': {
      width: '100%',
      height: '100%',
    },

    '*svg, svg *': {
      fill: 'currentColor',
    },

    '*hr': {
      borderTop: '1px solid #eee',
      borderBottom: 0,
      height: 0,
    },

    '*#root': {
      position: 'relative',
    },

    '*.row': {
      margin: '0 -16px',
    },

    '*[class^="col"]': {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
});


extended.css(styles.globals);
