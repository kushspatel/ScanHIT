// React
import * as React from "react";

// Next
import { useTheme } from "next-themes";

// Apis

// Helpers
import ReactGA from "react-ga4";

// Redux

// Store

// Action

// Icon
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

// Layout

// Other components
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const ThemeSwitcher = (props) => {
  const { tooltipSide = "left" } = props;

  const { theme, setTheme } = useTheme();

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <div className="flex justify-center align-middle">
            <>
              {theme === "dark" ? (
                <Button
                  className="bg-transparent hover:bg-foreground hover:text-background text-foreground"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setTheme("light");
                    ReactGA.event({
                      category: "Theme",
                      action: "OP_light_theme_selected",
                      label: "Theme Switcher",
                    });
                  }}
                >
                  <MoonIcon className="mx-1.5 w-6 h-6" />
                </Button>
              ) : (
                <Button
                  className="bg-transparent hover:bg-foreground hover:text-background text-foreground"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setTheme("dark");
                    ReactGA.event({
                      category: "Theme",
                      action: "OP_dark_theme_selected",
                      label: "Theme Switcher",
                    });
                  }}
                >
                  <SunIcon className="mx-1.5 w-6 h-6" />
                </Button>
              )}
            </>
          </div>
        </TooltipTrigger>
        <TooltipContent
          side={tooltipSide}
          sideOffset={4}
          className="bg-zinc-700 text-entryForeground"
        >
          Switch To {theme === "dark" ? "Light" : "Dark"} Mode
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeSwitcher;
