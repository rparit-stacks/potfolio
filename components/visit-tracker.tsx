"use client"

import { useEffect } from "react"
import { supabase, isSupabaseReady } from "@/lib/supabase"

export default function VisitTracker() {
  useEffect(() => {
    const trackVisit = async () => {
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

        // Send email notification about the visit
        try {
          await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type: "visit",
              ipAddress: ipAddress,
              userAgent: userAgent,
              pageUrl: pageUrl,
              referrer: referrer,
            }),
          })
        } catch (emailError) {
          console.error("Error sending visit email:", emailError)
        }

        // Also insert into Supabase if configured
        if (isSupabaseReady) {
          try {
            await supabase.from("visits").insert({
              ip_address: ipAddress,
              user_agent: userAgent,
              page_url: pageUrl,
              referrer: referrer,
            })
          } catch (supabaseError) {
            console.error("Error inserting into Supabase:", supabaseError)
          }
        }
      } catch (error) {
        console.error("Error tracking visit:", error)
      }
    }

    trackVisit()
  }, [])

  return null
}

