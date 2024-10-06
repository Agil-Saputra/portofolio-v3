import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import SmoothScroll from "./components/smoothScroll";
import "./globals.css";

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
  })

export const metadata: Metadata = {
  title: "Agil Saputra Portofolio",
  description: "Website for Showcasing Agil's Projects Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SmoothScroll>
				{children}
				</SmoothScroll>
          </ThemeProvider>
      </body>
    </html>
  );
}
