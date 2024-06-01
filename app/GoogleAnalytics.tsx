"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initGA, logPageView } from "./lib/analytics";

const GoogleAnalytics: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  useEffect(() => {
    logPageView();
  }, [pathname]);

  return null;
};

export default GoogleAnalytics;
