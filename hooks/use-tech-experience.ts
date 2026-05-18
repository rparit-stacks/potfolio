"use client"

import { useEffect, useState } from "react"
import {
  getTechExperienceDuration,
  type ExperienceDuration,
} from "@/lib/experience"

/** Client-only duration so SSR and browser dates never mismatch. */
export function useTechExperience(): ExperienceDuration | null {
  const [duration, setDuration] = useState<ExperienceDuration | null>(null)

  useEffect(() => {
    setDuration(getTechExperienceDuration())
  }, [])

  return duration
}
