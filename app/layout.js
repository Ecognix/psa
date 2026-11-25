import "./globals.css";
import { SiteHeader, SiteFooter } from "../components/SiteShell";
import Assistant from "../components/Assistant";

export const metadata = {
  title: "Prasujya Sports Arena (PSA) | Guwahati's place to play",
  description: "A new home for the game at Prasujya Sports Arena (PSA) in Tarun Nagar, Guwahati. Explore the turf and try the booking experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Assistant />
      </body>
    </html>
  );
}
