import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <Script id="theme-toggle" strategy="afterInteractive">
          {`
            (function() {
              const settings = JSON.parse(localStorage.getItem("settings") || "{}") || {};
              document.documentElement.classList.toggle(
                "dark",
                settings.mode === "dark" ||
                  (!("settings" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
              );
            })();
          `}
        </Script>
      </Head>
      <body className="antialiased bg-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
