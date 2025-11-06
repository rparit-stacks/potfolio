import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import VisitTracker from "@/components/visit-tracker"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rohit Parit | Java Developer",
  description: "Java Developer specializing in Spring Boot, REST APIs, and Microservices",
  icons: {
    icon: [{ url: "pp.jpg" }],
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <VisitTracker />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
