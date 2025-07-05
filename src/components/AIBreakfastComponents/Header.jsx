import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AutoAwesome as SparklesIcon,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const Header = ({ onNewsletterClick }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(135deg, #000000 0%, #1f2937 50%, #000000 100%)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated background gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.1), transparent)",
          animation: `${pulse} 4s ease-in-out infinite`,
        }}
      />

      {/* Floating particles */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "8px",
            left: "25%",
            width: "4px",
            height: "4px",
            bgcolor: theme.palette.primary.light,
            borderRadius: "50%",
            animation: `${ping} 3s infinite`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "16px",
            right: "33%",
            width: "4px",
            height: "4px",
            bgcolor: theme.palette.secondary.light,
            borderRadius: "50%",
            animation: `${ping} 4s infinite`,
            animationDelay: "1s",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "8px",
            left: "50%",
            width: "4px",
            height: "4px",
            bgcolor: "#a855f7",
            borderRadius: "50%",
            animation: `${ping} 5s infinite`,
            animationDelay: "2s",
          }}
        />
      </Box>

      <Toolbar sx={{ position: "relative", zIndex: 10 }}>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              "&:hover .logo-box": {
                transform: "scale(1.1) rotate(3deg)",
              },
              "&:hover .logo-text": {
                color: theme.palette.primary.light,
              },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                className="logo-box"
                sx={{
                  width: 32,
                  height: 32,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                  borderRadius: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                  }}
                >
                  AI
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  inset: -1,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                  borderRadius: 1.5,
                  opacity: 0,
                  filter: "blur(4px)",
                  transition: "opacity 0.3s ease",
                  ".logo-box:hover ~ &": {
                    opacity: 0.2,
                  },
                }}
              />
            </Box>
            <Typography
              variant="h6"
              className="logo-text"
              sx={{
                fontWeight: 600,
                transition: "color 0.3s ease",
                color: "white",
              }}
            >
              AI GenStree
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            onClick={onNewsletterClick}
            variant="contained"
            sx={{
              background: "white",
              color: "black",
              px: 3,
              py: 1,
              borderRadius: "24px",
              fontWeight: 600,
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                color: "white",
                transform: "scale(1.05)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                "& .sparkles-icon": {
                  opacity: 1,
                },
              },
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                opacity: 0,
                transition: "opacity 0.3s ease",
              },
            }}
          >
            <SparklesIcon
              className="sparkles-icon"
              sx={{
                mr: 1,
                fontSize: "1rem",
                transition: "opacity 0.3s ease",
              }}
            />
            <Box component="span" sx={{ position: "relative", zIndex: 1 }}>
              Subscribe
            </Box>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
