import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import "./styles/globals.css";

// Carregamento dinâmico do GoogleAnalytics
const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), {
  ssr: false,
});

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
        <link
          rel="preload"
          href="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          as="image"
        />
      </head>
      <body className="bg-gray-100 text-gray-900">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
