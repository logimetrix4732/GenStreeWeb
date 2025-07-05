import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "../components/AIBreakfastComponents/Header";
import MainContent from "../components/AIBreakfastComponents/MainContent";
import { NewsletterModal } from "../components/AIBreakfastComponents/NewsletterModal";
import { theme } from "../theme";

function AIBreakfast() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header onNewsletterClick={() => setIsNewsletterOpen(true)} />
        <MainContent />
        <NewsletterModal
          isOpen={isNewsletterOpen}
          onClose={() => setIsNewsletterOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default AIBreakfast;
