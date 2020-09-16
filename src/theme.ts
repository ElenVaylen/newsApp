import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    tablet: true // adds the `tablet` breakpoint
  }
}
declare module '@material-ui/core/Grid' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    tablet: true // adds the `tablet` breakpoint
  }
}
// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tablet: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    htmlFontSize: 16,
    fontSize: 16,
  },
  palette: {
    primary: {
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6abf69',
      main: '#388e3c',
      dark: '#00600f',
      contrastText: '#f5f5f5',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
  },
  spacing: (factor) => theme.typography.pxToRem(factor * 8),
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: () => theme.typography.pxToRem(24),
      },
      paragraph: {
        marginBottom: () => theme.typography.pxToRem(12),
      },
    },
  },
})

theme.typography.h1 = {
  fontSize: theme.typography.pxToRem(26),
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(34),
  },
};
theme.typography.h2 = {
  fontSize: theme.typography.pxToRem(24),
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(30),
  },
};
theme.typography.h3 = {
  fontSize: theme.typography.pxToRem(22),
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(26),
  },
};
theme.typography.h4 = {
  fontSize: theme.typography.pxToRem(20),
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(24),
  },
};
theme.typography.h5 = {
  fontSize: theme.typography.pxToRem(18),
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(22),
  },
};
theme.typography.h6 = {
  fontSize: theme.typography.pxToRem(16),
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(20),
  },
};
theme.typography.subtitle1 = {
  fontSize: theme.typography.pxToRem(16),
  'font-family': 'Poppins, sans-serif',
  fontWeight: 300,
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(18),
  },
};
theme.typography.subtitle2 = {
  fontSize: theme.typography.pxToRem(12),
  'font-family': 'Poppins, sans-serif',
  fontWeight: 300,
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(14),
  },
};
theme.typography.body1 = {
  fontSize: theme.typography.pxToRem(12),
  'font-family': 'Poppins, sans-serif',
};
theme.typography.body2 = {
  fontSize: theme.typography.pxToRem(14),
  'font-family': 'Poppins, sans-serif',
};
export default theme
