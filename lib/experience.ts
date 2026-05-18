/** Tech career start — first role (GNEXT), July 2025 */
export const TECH_CAREER_START = new Date(2025, 6, 1) // month is 0-indexed

export type ExperienceDuration = {
  totalMonths: number
  years: number
  months: number
  label: string
  shortLabel: string
}

function monthDiff(from: Date, to: Date): number {
  let months =
    (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth())
  if (to.getDate() < from.getDate()) months -= 1
  return Math.max(0, months)
}

/**
 * Months of professional tech experience from career start to `asOf` (default: today).
 */
export function getTechExperienceDuration(asOf: Date = new Date()): ExperienceDuration {
  const totalMonths = monthDiff(TECH_CAREER_START, asOf)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  let label: string
  let shortLabel: string

  if (totalMonths === 0) {
    label = "Starting soon"
    shortLabel = "0 mo"
  } else if (years === 0) {
    label = `${totalMonths} month${totalMonths === 1 ? "" : "s"}`
    shortLabel = `${totalMonths} mo`
  } else if (months === 0) {
    label = `${years} year${years === 1 ? "" : "s"}`
    shortLabel = years === 1 ? "1 yr" : `${years} yr`
  } else {
    label = `${years} year${years === 1 ? "" : "s"} ${months} month${months === 1 ? "" : "s"}`
    shortLabel = `${years} yr ${months} mo`
  }

  return { totalMonths, years, months, label, shortLabel }
}

export function formatCareerSince(): string {
  return TECH_CAREER_START.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })
}
