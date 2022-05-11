import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: `capitalize`,
          background: '#f5f8fa',
          borderColor: 'rgb(213, 216, 218)',
          color: '#24292f',
          a: {
            textDecoration: 'none',
            color: '#24292f',
          },
          '&:hover': {
            backgroundColor: '#1976d2',
            borderColor: '#1976d2',
            color: 'white',
            a: {
              color: '#fff',
            },
          },
        },
      },
      variants: [
        {
          props: { variant: 'github' },
          style: {
            fontSize: '13px',
            border: '1px solid rgb(213, 216, 218)',

            maxHeight: '28px',
            svg: {
              maxWidth: '15px',
            },
          },
        },
      ],
    },
  },
});

export default theme;
