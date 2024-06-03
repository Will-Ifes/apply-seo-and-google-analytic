import React, { ReactNode } from "react";
import GoogleAnalytics from "./GoogleAnalytics";
import "./styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Descrição do seu site" />
        <meta
          name="keywords"
          content="palavras-chave, relacionadas, ao, conteúdo"
        />
        <title>E-Commerce</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
