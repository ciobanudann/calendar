import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#D3D3D3", light: "#D3D3D3", dark: "#D3D3D3" },
    secondary: { main: "#1967d2", light: "#1967d2", dark: "#1967d2" },
    text: { disabled: "#D3D3D3", primary: "#000000", secondary: "#000000" },
  },

  components: {
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.primary.light}`,
          height: "50px",
          padding: 0,
        }),
      },
      variants: [
        {
          props: { variant: "head" },
          style: {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "1px solid black",
          },
        },
        {
          props: { variant: "footer" },
          style: {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            width: "75px",
            textAlign: "center",
          },
        },
      ],
    },

    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: '20px'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },
  },
});

export default theme;
