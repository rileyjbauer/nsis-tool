import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Ensures that each time the user navigates, the app scrolls to the top of the page
export function ScrollToTopWrapper({ children }: any) {
  const location = useLocation();
  useEffect(() => {
    // Always scroll to top on page load
    document.documentElement.scrollTo(0, 0);

    // TODO: Verify whether or not this is needed
    // Make sure to show service worker update even when user navigates
    if ('serviceWorker' in navigator && navigator.serviceWorker) {
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((reg) => reg.update()));
    }
  }, [location.pathname]);

  return children
}