import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#10b981", // emerald-500
      dark: "#059669", // emerald-600
      light: "#34d399", // emerald-400
    },
    secondary: {
      main: "#3b82f6", // blue-500
      dark: "#2563eb", // blue-600
      light: "#60a5fa", // blue-400
    },
    background: {
      default: "#f9fafb", // gray-50
      paper: "#ffffff",
    },
    text: {
      primary: "#111827", // gray-900
      secondary: "#6b7280", // gray-500
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "1.875rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "24px",
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: 600,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "16px",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
            },
            "&.Mui-focused": {
              transform: "scale(1.02)",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
  },
});
