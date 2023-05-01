import "./globals.css";
import { Inter } from "next/font/google";

import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prac App",
  description: "NextJs new Features Practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
