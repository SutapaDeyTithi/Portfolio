import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4965', // Deep slate blue for topbar and headings
    },
    secondary: {
      main: '#EE6C4D', // Coral-orange for buttons and accents
    },
    background: {
      default: '#F1F6F9', // Very light blue for main background
      paper: '#FFFFFF',   // White for cards/panels
    },
    text: {
      primary: '#1C1C1C', // Very dark gray for high readability
      secondary: '#4F4F4F', // Softer gray for supporting text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h3: {
      fontWeight: 700,
      color: '#1B4965', // Match primary heading
    },
    body1: {
      fontSize: '1rem',
      color: '#1C1C1C',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '6px 16px',
        },
        containedSecondary: {
          backgroundColor: '#EE6C4D',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#D85539', // Slightly darker coral
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1B4965',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
