import React from "react";
import GoogleAnalytics from "./GoogleAnalytics";

const HomePage: React.FC = () => {
  return (
    <>
      <GoogleAnalytics />
      <header>
        <h1>Welcome to my Next.js app</h1>
      </header>
      <main>
        <section>
          <p>
            This is the home page of my Next.js app, built with modern web
            technologies.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Next.js App. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;
