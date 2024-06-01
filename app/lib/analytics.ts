// lib/analytics.ts
import ReactGA from "react-ga4";

export const initGA = () => {
  const trackingId = process.env.NEXT_PUBLIC_GA_ID;
  if (trackingId) {
    ReactGA.initialize(trackingId);
  } else {
    console.error("Google Analytics tracking ID is missing");
  }
};

export const logPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};
