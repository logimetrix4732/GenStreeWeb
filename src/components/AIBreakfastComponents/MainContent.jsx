import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Container,
  Paper,
  Avatar,
  IconButton,
  useTheme,
  alpha,
  Skeleton,
} from "@mui/material";
import {
  Search as SearchIcon,
  Person as PersonIcon,
  Twitter as TwitterIcon,
  TrendingUp,
  Psychology as BrainIcon,
  Bolt as ZapIcon,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-10px); }
  70% { transform: translateY(-5px); }
  90% { transform: translateY(-2px); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainContent = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "background.paper",
          py: 8,
          px: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background */}
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
              top: "80px",
              left: "40px",
              width: "128px",
              height: "128px",
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.primary.light,
                0.1
              )}, ${alpha(theme.palette.secondary.main, 0.1)})`,
              borderRadius: "50%",
              filter: "blur(40px)",
              animation: `${pulse} 4s ease-in-out infinite`,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "80px",
              right: "40px",
              width: "160px",
              height: "160px",
              background: `linear-gradient(135deg, ${alpha(
                "#a855f7",
                0.1
              )}, ${alpha("#ec4899", 0.1)})`,
              borderRadius: "50%",
              filter: "blur(40px)",
              animation: `${pulse} 4s ease-in-out infinite`,
              animationDelay: "1s",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "240px",
              height: "240px",
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.secondary.light,
                0.05
              )}, ${alpha(theme.palette.primary.main, 0.05)})`,
              borderRadius: "50%",
              filter: "blur(60px)",
              animation: `${pulse} 4s ease-in-out infinite`,
              animationDelay: "2s",
            }}
          />
        </Box>

        <Container
          maxWidth="md"
          sx={{ textAlign: "center", position: "relative", zIndex: 10 }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Box
              sx={{
                position: "relative",
                "&:hover": {
                  "& .main-logo": {
                    transform: "scale(1.1) rotate(6deg)",
                  },
                  "& .floating-icon": {
                    opacity: 1,
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <Box
                className="main-logo"
                sx={{
                  width: 80,
                  height: 80,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.5s ease",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  AI
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  inset: -2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                  borderRadius: 3,
                  opacity: 0,
                  filter: "blur(8px)",
                  transition: "opacity 0.5s ease",
                  ".main-logo:hover ~ &": {
                    opacity: 0.2,
                  },
                }}
              />

              {/* Floating icons */}
              <BrainIcon
                className="floating-icon"
                sx={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  fontSize: "1.5rem",
                  color: theme.palette.primary.main,
                  opacity: 0,
                  transition: "all 0.5s ease",
                  animation: `${bounce} 2s infinite`,
                  animationDelay: "0.2s",
                }}
              />
              <ZapIcon
                className="floating-icon"
                sx={{
                  position: "absolute",
                  bottom: -16,
                  left: -16,
                  fontSize: "1.25rem",
                  color: theme.palette.secondary.main,
                  opacity: 0,
                  transition: "all 0.5s ease",
                  animation: `${bounce} 2s infinite`,
                  animationDelay: "0.4s",
                }}
              />
              <TrendingUp
                className="floating-icon"
                sx={{
                  position: "absolute",
                  top: -16,
                  left: -16,
                  fontSize: "1.25rem",
                  color: "#a855f7",
                  opacity: 0,
                  transition: "all 0.5s ease",
                  animation: `${bounce} 2s infinite`,
                  animationDelay: "0.6s",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: `${fadeInUp} 0.6s ease-out`,
              }}
            >
              AI GenStree
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
                animation: `${fadeInUp} 0.6s ease-out`,
                animationDelay: "0.2s",
                animationFillMode: "both",
              }}
            >
              Curated weekly analysis of the latest AI projects,
              <br />
              products, and news
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Author Info */}
      <Box
        sx={{
          bgcolor: "background.paper",
          borderTop: 1,
          borderColor: "divider",
          px: 3,
          py: 4,
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "all 0.3s ease",
              "&:hover .author-avatar": {
                transform: "scale(1.1)",
              },
              "&:hover .author-name": {
                color: theme.palette.secondary.main,
              },
              "&:hover .author-label": {
                color: theme.palette.primary.main,
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  className="author-avatar"
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: alpha(theme.palette.grey[300], 0.8),
                    transition: "transform 0.3s ease",
                  }}
                >
                  <PersonIcon sx={{ color: theme.palette.grey[600] }} />
                </Avatar>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  className="author-label"
                  sx={{
                    color: "text.secondary",
                    transition: "color 0.3s ease",
                  }}
                >
                  Written By
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="author-name"
                  sx={{ fontWeight: 600, transition: "color 0.3s ease" }}
                >
                  AI GenStree
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Connect
              </Typography>
              <IconButton
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: alpha(theme.palette.secondary.main, 0.1),
                    transform: "scale(1.1) rotate(3deg)",
                    "& .twitter-icon": {
                      color: theme.palette.secondary.main,
                    },
                  },
                }}
              >
                <TwitterIcon
                  className="twitter-icon"
                  sx={{
                    color: "text.secondary",
                    transition: "color 0.3s ease",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Search */}
      <Box sx={{ px: 3, py: 4 }}>
        <Container maxWidth="md">
          <Box sx={{ position: "relative" }}>
            <TextField
              fullWidth
              placeholder="Search posts..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              InputProps={{
                startAdornment: (
                  <SearchIcon
                    sx={{
                      mr: 1,
                      color: searchFocused
                        ? theme.palette.secondary.main
                        : "text.secondary",
                      transform: searchFocused ? "scale(1.1)" : "scale(1)",
                      transition: "all 0.3s ease",
                    }}
                  />
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  py: 1,
                  "&:hover": {
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  },
                  "&.Mui-focused": {
                    boxShadow: `0 4px 20px ${alpha(
                      theme.palette.secondary.main,
                      0.2
                    )}`,
                  },
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${alpha(
                  theme.palette.primary.main,
                  0.05
                )}, ${alpha(theme.palette.secondary.main, 0.05)})`,
                opacity: searchFocused ? 1 : 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Placeholder Skeletons */}
      <Box sx={{ px: 3, pb: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[1, 2, 3].map((item) => (
              <Paper
                key={item}
                elevation={1}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    "& .skeleton": {
                      background: `linear-gradient(90deg, ${alpha(
                        theme.palette.primary.light,
                        0.2
                      )}, ${alpha(theme.palette.secondary.light, 0.2)}, ${alpha(
                        theme.palette.primary.light,
                        0.2
                      )})`,
                    },
                  },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Skeleton
                    className="skeleton"
                    variant="text"
                    width="75%"
                    height={24}
                    sx={{ borderRadius: 1 }}
                  />
                  <Skeleton
                    className="skeleton"
                    variant="text"
                    width="100%"
                    height={16}
                    sx={{ borderRadius: 1 }}
                  />
                  <Skeleton
                    className="skeleton"
                    variant="text"
                    width="85%"
                    height={16}
                    sx={{ borderRadius: 1 }}
                  />
                  <Skeleton
                    className="skeleton"
                    variant="text"
                    width="65%"
                    height={16}
                    sx={{ borderRadius: 1 }}
                  />
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainContent;
