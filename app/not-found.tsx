"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen ios-mesh flex items-center justify-center px-4">
      <div className="ios-card max-w-md w-full p-10 text-center">
        <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-[#0a84ff] to-[#5e5ce6] text-white grid place-items-center text-2xl font-bold shadow-[0_10px_24px_-10px_rgba(10,132,255,0.6)]">
          404
        </div>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-2 text-[15px] text-[var(--ios-text-muted)] leading-relaxed">
          This page doesn’t exist or has moved. Let’s get you back home.
        </p>
        <Link href="/" className="ios-button-primary inline-flex items-center gap-2 mt-6">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
    </main>
  )
}
