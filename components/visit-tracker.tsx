"use client"

import { useEffect } from "react"
import { supabase, isSupabaseReady } from "@/lib/supabase"

export default function VisitTracker() {
  useEffect(() => {
    const trackVisit = async () => {
      // Check if Supabase is configured
      if (!isSupabaseReady) {
        console.warn("Supabase not configured. Visit tracking disabled.")
        return
      }

      try {
        // Get IP address (using a free service)
        let ipAddress = "unknown"
        try {
          const ipResponse = await fetch("https://api.ipify.org?format=json")
          const ipData = await ipResponse.json()
          ipAddress = ipData.ip
        } catch (error) {
          console.error("Error fetching IP:", error)
        }

        // Get user agent and other info
        const userAgent = typeof window !== "undefined" ? window.navigator.userAgent : "unknown"
        const pageUrl = typeof window !== "undefined" ? window.location.href : "unknown"
        const referrer = typeof window !== "undefined" ? document.referrer || "direct" : "unknown"

        // Insert visit into Supabase
        await supabase.from("visits").insert({
          ip_address: ipAddress,
          user_agent: userAgent,
          page_url: pageUrl,
          referrer: referrer,
        })
      } catch (error) {
        console.error("Error tracking visit:", error)
      }
    }

    trackVisit()
  }, [])

  return null
}

