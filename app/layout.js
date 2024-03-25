import { Space_Mono } from "next/font/google";
import "./globals.css";

const spacemono = Space_Mono({ subsets: ["latin"], weight:'700' });

export const metadata = {
  title: "Tip Calculator",
  description: "FrontEndMentor Challenge Tip Calculator App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spacemono.className}>{children}</body>
    </html>
  );
}
