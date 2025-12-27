import {useMemo} from "react";
import config from "@/config/config";

const allowedVenues = ["bo-me", "nha-trai", "nha-gai"];
const defaultVenue = "nha-trai";
/**
 * Custom hook to get the current venue configuration based on URL query parameter
 * @returns {object} The venue configuration object
 */
export function useVenue() {
  const venueConfig = useMemo(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const venue = urlParams.get("venue");

    // Validate venue parameter and default to "nha-trai" if invalid
    const venueKey = allowedVenues.includes(venue) ? venue : "bo-me";

    return config.venues[venueKey] || config.venues[defaultVenue];
  }, []); // Empty dependency array since we only read from window.location.search once

  return venueConfig;
}
