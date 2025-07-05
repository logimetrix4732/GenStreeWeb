import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  useTheme,
  alpha,
  Fade,
  Slide,
  Avatar,
} from "@mui/material";
import {
  Close as CloseIcon,
  Email as EmailIcon,
  CheckCircle as CheckCircleIcon,
  AutoAwesome as SparklesIcon,
  Favorite as HeartIcon,
  Star as StarIcon,
  Bolt as ZapIcon,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";

// Animations
const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-10px); }
  70% { transform: translateY(-5px); }
  90% { transform: translateY(-2px); }
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

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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

const confettiAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(720deg);
    opacity: 0;
  }
`;

export const NewsletterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const theme = useTheme();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSubscribed(true);
    setShowConfetti(true);

    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
      setShowConfetti(false);
      onClose();
    }, 4000);
  };

  const confettiElements = Array.from({ length: 50 }, (_, i) => (
    <Box
      key={i}
      sx={{
        position: "absolute",
        width: 8,
        height: 8,
        background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
        borderRadius: "50%",
        animation: showConfetti
          ? `${confettiAnimation} 3s ease-out forwards`
          : "none",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        opacity: 0.8,
      }}
    />
  ));

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          maxWidth: "600px",
        },
      }}
      TransitionComponent={Slide}
      TransitionProps={{ direction: "up", timeout: 500 }}
    >
      {showConfetti && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 1000,
          }}
        >
          {confettiElements}
        </Box>
      )}

      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 20,
          bgcolor: alpha("#ffffff", 0.2),
          backdropFilter: "blur(8px)",
          color: "white",
          "&:hover": {
            bgcolor: alpha("#ffffff", 0.3),
            transform: "scale(1.1) rotate(90deg)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ p: 0 }}>
        {/* Hero Image Section */}
        <Box
          sx={{
            height: 250,
            background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main}, #a855f7)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{ position: "absolute", inset: 0, bgcolor: alpha("#000", 0.2) }}
          />
          <Box
            component="img"
            src="/WhatsApp Image 2025-07-04 at 11.01.19 AM.jpeg"
            alt="AI GenStree"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              mixBlendMode: "overlay",
            }}
          />

          {/* Floating Elements */}
          <Box sx={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            <Box
              sx={{
                position: "absolute",
                top: "40px",
                left: "40px",
                width: 12,
                height: 12,
                bgcolor: alpha("#fff", 0.4),
                borderRadius: "50%",
                animation: `${ping} 3s infinite`,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "80px",
                right: "64px",
                width: 8,
                height: 8,
                bgcolor: alpha("#fff", 0.5),
                borderRadius: "50%",
                animation: `${bounce} 2s infinite`,
                animationDelay: "0.5s",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "64px",
                left: "80px",
                width: 16,
                height: 16,
                bgcolor: alpha("#fff", 0.3),
                borderRadius: "50%",
                animation: `${pulse} 3s infinite`,
                animationDelay: "1s",
              }}
            />
            <SparklesIcon
              sx={{
                position: "absolute",
                top: "64px",
                right: "128px",
                fontSize: "1.5rem",
                color: alpha("#fff", 0.6),
                animation: `${spin} 4s linear infinite`,
              }}
            />
            <StarIcon
              sx={{
                position: "absolute",
                bottom: "96px",
                left: "64px",
                fontSize: "1.25rem",
                color: alpha("#fff", 0.5),
                animation: `${pulse} 2s infinite`,
                animationDelay: "0.8s",
              }}
            />
            <ZapIcon
              sx={{
                position: "absolute",
                top: "96px",
                left: "96px",
                fontSize: "1rem",
                color: alpha("#fff", 0.7),
                animation: `${bounce} 2s infinite`,
                animationDelay: "1.2s",
              }}
            />
            <HeartIcon
              sx={{
                position: "absolute",
                bottom: "128px",
                right: "96px",
                fontSize: "1rem",
                color: alpha("#fff", 0.6),
                animation: `${pulse} 2.5s infinite`,
                animationDelay: "1.8s",
              }}
            />
          </Box>

          {/* Animated Avatar Logo */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: alpha("#000", 0.8),
                backdropFilter: "blur(8px)",
                borderRadius: 3,
                p: 2,
                border: `1px solid ${alpha("#fff", 0.2)}`,
                transition: "all 0.5s ease",
                "&:hover": { transform: "scale(1.1) rotate(3deg)" },
              }}
            >
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                  borderRadius: 2,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  AI
                </Typography>
              </Avatar>
            </Box>
          </Box>

          {/* Wave Bottom */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 64,
              background: "linear-gradient(to top, white, transparent)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 32,
              bgcolor: "white",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              transition: "all 1s ease",
            }}
          />
        </Box>

        {/* Form / Success Content */}
        <Box sx={{ p: 4 }}>
          {!isSubscribed ? (
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 1.5,
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  animation: `${fadeInUp} 0.6s ease-out`,
                }}
              >
                AI GenStree
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                Curated weekly analysis of the latest AI projects,
                <br />
                products, and news
              </Typography>
              <form onSubmit={handleSubscribe}>
                <TextField
                  fullWidth
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  InputProps={{
                    startAdornment: (
                      <EmailIcon sx={{ mr: 1, color: "text.secondary" }} />
                    ),
                  }}
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading || !email}
                  sx={{
                    py: 1.5,
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, #a855f7)`,
                    "&:hover": {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  {isLoading ? (
                    <>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTop: "2px solid white",
                          borderRadius: "50%",
                          animation: `${spin} 1s linear infinite`,
                        }}
                      />
                      &nbsp; Subscribing...
                    </>
                  ) : (
                    <>
                      <SparklesIcon sx={{ fontSize: "1.25rem" }} />
                      &nbsp; Subscribe
                    </>
                  )}
                </Button>
              </form>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  ✅ 10k+ subscribers • ⭐ Weekly insights
                </Typography>
              </Box>
            </Box>
          ) : (
            <Fade in={isSubscribed} timeout={500}>
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: alpha(theme.palette.success.main, 0.1),
                    animation: `${bounce} 1s infinite`,
                    mx: "auto",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      fontSize: "2.5rem",
                      color: theme.palette.success.main,
                    }}
                  />
                </Avatar>
                <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                  Welcome aboard! 🎉
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  You've successfully subscribed to AI GenStree.
                  <br />
                  Check your inbox for a confirmation email.
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    gap: 0.5,
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      sx={{
                        fontSize: "1.25rem",
                        color: "#f59e0b",
                        animation: `${bounce} 1s infinite`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Fade>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
