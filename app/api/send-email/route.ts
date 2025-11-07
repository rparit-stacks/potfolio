import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Hardcoded email configuration
const EMAIL_CONFIG = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "rohitparit1934@gmail.com",
    pass: "wwrl cmvv kksf qcdi", // App password
  },
}

// Recipient email
const RECIPIENT_EMAIL = "rbusiness1999@gmail.com"

// Create transporter
const transporter = nodemailer.createTransport(EMAIL_CONFIG)

// Helper function to get IP address from request
function getIpAddress(request: NextRequest): string {
  // Try to get IP from various headers (for proxies/load balancers)
  const forwarded = request.headers.get("x-forwarded-for")
  const realIp = request.headers.get("x-real-ip")
  const cfConnectingIp = request.headers.get("cf-connecting-ip")

  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }
  if (realIp) {
    return realIp
  }
  if (cfConnectingIp) {
    return cfConnectingIp
  }

  // Fallback
  return "unknown"
}

// Helper function to format time in 12-hour format
function formatTime12Hour(): string {
  const now = new Date()
  let hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  const ampm = hours >= 12 ? "PM" : "AM"

  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'

  const minutesStr = minutes < 10 ? `0${minutes}` : minutes
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds

  return `${hours}:${minutesStr}:${secondsStr} ${ampm}`
}

// Helper function to format date
function formatDate(): string {
  const now = new Date()
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return now.toLocaleDateString("en-US", options)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ipAddress, userAgent, pageUrl, referrer, formData } = body

    // Get IP address if not provided
    const visitorIp = ipAddress || getIpAddress(request)
    const time = formatTime12Hour()
    const date = formatDate()

    let subject = ""
    let htmlContent = ""

    if (type === "visit") {
      // Email for website visit
      subject = `New Website Visit - ${date}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            New Website Visit
          </h2>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 8px 0;"><strong>IP Address:</strong> ${visitorIp}</p>
            <p style="margin: 8px 0;"><strong>Date:</strong> ${date}</p>
            <p style="margin: 8px 0;"><strong>Time:</strong> ${time}</p>
            <p style="margin: 8px 0;"><strong>Page URL:</strong> ${pageUrl || "Home Page"}</p>
            <p style="margin: 8px 0;"><strong>Referrer:</strong> ${referrer || "Direct Visit"}</p>
            <p style="margin: 8px 0;"><strong>User Agent:</strong> ${userAgent || "Unknown"}</p>
          </div>
          <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
            A person from IP address <strong>${visitorIp}</strong> visited your website at <strong>${time}</strong> on <strong>${date}</strong>.
          </p>
        </div>
      `
    } else if (type === "form") {
      // Email for form submission
      subject = `New Contact Form Submission - ${date}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${formData?.name || "Not provided"}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${formData?.email || "Not provided"}</p>
            <p style="margin: 8px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 10px; border-radius: 4px; margin-top: 5px;">
              <p style="margin: 0; white-space: pre-wrap;">${formData?.message || "Not provided"}</p>
            </div>
          </div>
          <div style="background-color: #e5e7eb; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <h3 style="margin-top: 0; color: #374151;">Visitor Information</h3>
            <p style="margin: 8px 0;"><strong>IP Address:</strong> ${visitorIp}</p>
            <p style="margin: 8px 0;"><strong>Date:</strong> ${date}</p>
            <p style="margin: 8px 0;"><strong>Time:</strong> ${time}</p>
            <p style="margin: 8px 0;"><strong>User Agent:</strong> ${userAgent || "Unknown"}</p>
          </div>
        </div>
      `
    } else {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 })
    }

    // Send email
    const mailOptions = {
      from: `"Portfolio Website" <${EMAIL_CONFIG.auth.user}>`,
      to: RECIPIENT_EMAIL,
      subject: subject,
      html: htmlContent,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error: any) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email", details: error.message }, { status: 500 })
  }
}

