// React
import React from "react";

// Next

// Apis

// Helpers

// Redux

// Store

// Action

// Icon
// import SymbolOpTalkLogo from '@/assets/svgs/SymbolOpTalkLogo';
// import OpTalkTextFace from '@/assets/svgs/OpTalkTextFace';

// Layout

// Other components
import "@/styles/globals.scss";
import { ThemeProvider } from "@/components/ui/theme-provider";

const App = ({ Component }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {/* Overlay message for non-desktop users */}
      {/* <div className="fixed inset-0 flex items-center justify-center p-2 text-center bg-black md:hidden">
                        <SymbolOpTalkLogo className="w-16 h-16  fixed top-5 left-[20px]" />
                        <OpTalkTextFace className="w-32 h-16  fixed top-5 left-[100px]" />

                        <p className="text-xl text-entry">
                            optalk Mobile is on its way! For now, enjoy optalk from your
                            desktop or laptop.
                        </p>
                    </div> */}
      {/* Main application only visible on desktops and larger screens */}
      <div className="w-screen h-auto">
        <Component />
      </div>
    </ThemeProvider>
  );
};

export default App;
