'use client';

import { IBM_Plex_Sans, IBM_Plex_Mono, Montserrat, Public_Sans } from "next/font/google";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import { Theme, ThemePanel, IconButton } from "@radix-ui/themes";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
});

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { appearance } = useTheme();
  const [showThemePanel, setShowThemePanel] = useState(false);
  
  const toggleThemePanel = () => {
    setShowThemePanel(!showThemePanel);
  };
  
  return (
    <Theme 
      appearance={appearance} 
      accentColor="crimson" 
      grayColor="mauve" 
      scaling="105%" 
      radius="medium"
    >
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        <Footer />
        
        {process.env.NODE_ENV === 'development' && (
          <>
            {showThemePanel && <ThemePanel />}
            <div className="fixed bottom-4 right-4 z-50">
              <IconButton 
                size="3" 
                variant="solid" 
                color="gray" 
                onClick={toggleThemePanel}
                aria-label={showThemePanel ? "Close theme panel" : "Open theme panel"}
              >
                {showThemePanel ? (
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                )}
              </IconButton>
            </div>
          </>
        )}
      </div>
    </Theme>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Human Rating - AI Companion Rating Platform</title>
        <meta name="description" content="A collaborative platform for evaluating AI systems and companions with a focus on human-centered metrics" />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${montserrat.variable} ${publicSans.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
