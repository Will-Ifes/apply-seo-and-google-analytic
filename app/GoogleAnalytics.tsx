"use client";

import React, { useEffect } from "react";
import { initGA, logPageView } from "./lib/analytics";

const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return null;
};

export default GoogleAnalytics;
