"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Award, FileText, ChevronRight, ChevronLeft, Download, X, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    name: "Coursera Certificate - DIJ1GMKTN3O6",
    file: "/cert/Coursera DIJ1GMKTN3O6.pdf",
  },
  {
    name: "Coursera Certificate - IQRIHHA10NL7",
    file: "/cert/Coursera IQRIHHA10NL7.pdf",
  },
  {
    name: "Coursera Certificate - PQ56JF3RQY62",
    file: "/cert/Coursera PQ56JF3RQY62.pdf",
  },
  {
    name: "Coursera Certificate - VYRCXILD1YNS",
    file: "/cert/Coursera VYRCXILD1YNS.pdf",
  },
  {
    name: "Programming in C and C++ with AI Training",
    file: "/cert/Programming in C and C++ with AI Training - Certificate of Completion.pdf",
  },
  {
    name: "Data Structures & Algorithms Training",
    file: "/cert/Data Structures & Algorithms Training - Certificate of Completion.pdf",
  },
  {
    name: "Data Structures & Algorithms Training (Duplicate)",
    file: "/cert/Data Structures & Algorithms Training - Certificate of Completion (1).pdf",
  },
  {
    name: "Certificate - 484d181341f607a8b4b735c72d433381",
    file: "/cert/484d181341f607a8b4b735c72d433381.pdf",
  },
  {
    name: "Certificate - 98e33324-423c-4a0d-97fc-a22adcad2940",
    file: "/cert/98e33324-423c-4a0d-97fc-a22adcad2940.pdf",
  },
  {
    name: "Certificate - efc38bbc-cc16-4753-b547-552ba9fe0420",
    file: "/cert/efc38bbc-cc16-4753-b547-552ba9fe0420.pdf",
  },
  {
    name: "CAN Certificate - 32394901",
    file: "/cert/CAN_32394901_4219480.pdf",
  },
  {
    name: "CAN Certificate - 32817742",
    file: "/cert/CAN_32817742_4262504.pdf",
  },
  {
    name: "CAN Certificate - 32817742 (Duplicate)",
    file: "/cert/CAN_32817742_4262504 (1).pdf",
  },
]

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)
  const dragStartTime = useRef(0)
  const hasMoved = useRef(false)
  const touchStartX = useRef(0)
  const touchScrollLeft = useRef(0)

  // Check scroll position to show/hide buttons
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftButton(scrollLeft > 0)
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Scroll functions
  const scrollLeftFunc = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRightFunc = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current && e.button === 0) { // Only left mouse button
      dragStartTime.current = Date.now()
      hasMoved.current = false
      setIsDragging(true)
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
      setScrollLeft(scrollContainerRef.current.scrollLeft)
      scrollContainerRef.current.style.cursor = 'grabbing'
      scrollContainerRef.current.style.userSelect = 'none'
    }
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    hasMoved.current = false
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab'
      scrollContainerRef.current.style.userSelect = 'auto'
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    hasMoved.current = false
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab'
      scrollContainerRef.current.style.userSelect = 'auto'
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    
    if (Math.abs(walk) > 5) {
      hasMoved.current = true
      e.preventDefault()
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  // Update button visibility on scroll
  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      checkScrollButtons()
      container.addEventListener('scroll', checkScrollButtons)
      window.addEventListener('resize', checkScrollButtons)
      return () => {
        container.removeEventListener('scroll', checkScrollButtons)
        window.removeEventListener('resize', checkScrollButtons)
      }
    }
  }, [])

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-jungle-900/30 dark:to-jungle-900/50 overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <Award className="h-8 w-8 text-jungle-600 dark:text-jungle-400" />
            Certificates & Achievements
            <Award className="h-8 w-8 text-jungle-600 dark:text-jungle-400" />
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A collection of my professional certifications and training achievements.
          </p>
          <div className="h-1 w-20 bg-jungle-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative w-full">
          {/* Left Scroll Button */}
          {showLeftButton && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={scrollLeftFunc}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-jungle-900/90 backdrop-blur-md hover:bg-white dark:hover:bg-jungle-800 rounded-full p-2 md:p-3 shadow-lg border-2 border-jungle-200 dark:border-jungle-700 hover:border-jungle-500 dark:hover:border-jungle-500 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-jungle-600 dark:text-jungle-400 group-hover:text-jungle-700 dark:group-hover:text-jungle-300" />
            </motion.button>
          )}

          {/* Right Scroll Button */}
          {showRightButton && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={scrollRightFunc}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-jungle-900/90 backdrop-blur-md hover:bg-white dark:hover:bg-jungle-800 rounded-full p-2 md:p-3 shadow-lg border-2 border-jungle-200 dark:border-jungle-700 hover:border-jungle-500 dark:hover:border-jungle-500 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-jungle-600 dark:text-jungle-400 group-hover:text-jungle-700 dark:group-hover:text-jungle-300" />
            </motion.button>
          )}
          
          <div 
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => {
              if (scrollContainerRef.current) {
                dragStartTime.current = Date.now()
                hasMoved.current = false
                touchStartX.current = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
                touchScrollLeft.current = scrollContainerRef.current.scrollLeft
              }
            }}
            onTouchMove={(e) => {
              if (scrollContainerRef.current && e.touches.length > 0) {
                const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
                const walk = (x - touchStartX.current) * 2
                if (Math.abs(walk) > 5) {
                  hasMoved.current = true
                  e.preventDefault()
                  scrollContainerRef.current.scrollLeft = touchScrollLeft.current - walk
                }
              }
            }}
            onTouchEnd={() => {
              hasMoved.current = false
            }}
            className="w-full overflow-x-auto overflow-y-hidden pb-6 scrollbar-hide scroll-smooth -mx-4 px-4 cursor-grab active:cursor-grabbing touch-pan-x" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          <motion.div 
            className="flex gap-6 min-w-max"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.08,
                  y: -12,
                  transition: { 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300
                  }
                }}
                className="flex-shrink-0"
              >
                <Card 
                  className="w-72 h-96 cursor-pointer border-2 border-slate-200 dark:border-jungle-800 hover:border-jungle-500 dark:hover:border-jungle-500 transition-all duration-300 dark:bg-jungle-800/30 overflow-hidden group shadow-lg hover:shadow-2xl select-none"
                  onClick={(e) => {
                    // Only open if not dragging and hasn't moved much
                    if (!hasMoved.current && (Date.now() - dragStartTime.current) < 200) {
                      setSelectedCertificate(cert.file)
                    }
                  }}
                  onMouseDown={(e) => {
                    // Allow card click but also track for drag detection
                    dragStartTime.current = Date.now()
                    hasMoved.current = false
                  }}
                >
                  <div className="relative h-full flex flex-col">
                    {/* Certificate Preview Area */}
                    <div className="relative h-64 bg-gradient-to-br from-jungle-100 via-jungle-200 to-jungle-300 dark:from-jungle-800 dark:via-jungle-900 dark:to-jungle-950 overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                          className="text-jungle-600 dark:text-jungle-400"
                        >
                          <FileText className="h-24 w-24 opacity-50 group-hover:opacity-70 transition-opacity" />
                        </motion.div>
                      </motion.div>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className="absolute top-4 right-4"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award className="h-8 w-8 text-jungle-600 dark:text-jungle-400 opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                      </motion.div>
                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    {/* Certificate Info */}
                    <CardContent className="flex-1 flex flex-col justify-between p-6 bg-white dark:bg-jungle-800/50">
                      <div>
                        <motion.h3 
                          className="font-semibold text-lg text-slate-800 dark:text-white mb-2 line-clamp-2 group-hover:text-jungle-600 dark:group-hover:text-jungle-400 transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {cert.name}
                        </motion.h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Click to view certificate
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ x: 8 }}
                        className="mt-4 flex items-center text-jungle-600 dark:text-jungle-400 text-sm font-medium group-hover:font-semibold transition-all"
                      >
                        View PDF
                        <motion.svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>

        {/* PDF Viewer Dialog - Bigger and More Stylish */}
        <Dialog open={selectedCertificate !== null} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
          <DialogContent 
            className="max-w-[95vw] w-[95vw] h-[95vh] max-h-[95vh] p-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-jungle-950 dark:via-jungle-900 dark:to-jungle-950 border-2 border-jungle-200 dark:border-jungle-700 shadow-2xl flex flex-col"
            style={{ maxWidth: '95vw', width: '95vw' }}
          >
            {/* Stylish Header with Gradient */}
            <DialogHeader className="relative px-8 pt-8 pb-6 bg-gradient-to-r from-jungle-500/10 via-jungle-400/5 to-jungle-500/10 dark:from-jungle-700/30 dark:via-jungle-800/20 dark:to-jungle-700/30 border-b-2 border-jungle-200/50 dark:border-jungle-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Award className="h-6 w-6 text-jungle-600 dark:text-jungle-400" />
                  </motion.div>
                  <DialogTitle className="text-2xl font-bold text-slate-800 dark:text-white bg-gradient-to-r from-jungle-600 to-jungle-700 dark:from-jungle-400 dark:to-jungle-300 bg-clip-text text-transparent">
                    {certificates.find(cert => cert.file === selectedCertificate)?.name || "Certificate"}
                  </DialogTitle>
                </div>
                <div className="flex items-center gap-2">
                  <motion.a
                    href={selectedCertificate || "#"}
                    download
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-jungle-300 dark:border-jungle-600 text-jungle-700 dark:text-jungle-300 hover:bg-jungle-100 dark:hover:bg-jungle-800"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </motion.a>
                </div>
              </div>
            </DialogHeader>

            {/* PDF Container with Better Styling */}
            <div className="flex-1 overflow-hidden p-6 bg-gradient-to-br from-slate-100/50 to-slate-50/50 dark:from-jungle-900/50 dark:to-jungle-950/50 min-h-0">
              {selectedCertificate && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-jungle-200/50 dark:border-jungle-700/50 bg-white dark:bg-jungle-900"
                  style={{ height: 'calc(95vh - 200px)', minHeight: '500px' }}
                >
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-jungle-500/30 to-transparent rounded-br-full pointer-events-none z-10" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-jungle-500/30 to-transparent rounded-bl-full pointer-events-none z-10" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-jungle-500/30 to-transparent rounded-tr-full pointer-events-none z-10" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-jungle-500/30 to-transparent rounded-tl-full pointer-events-none z-10" />
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-jungle-400/20 via-transparent to-jungle-400/20 pointer-events-none z-10" />
                  
                  {/* PDF Frame with proper sizing */}
                  <iframe
                    src={`${selectedCertificate}#toolbar=1&navpanes=1&scrollbar=1&zoom=page-fit`}
                    className="absolute inset-0 w-full h-full border-0 rounded-xl"
                    title="Certificate PDF"
                    allow="fullscreen"
                    style={{ 
                      height: '100%',
                      width: '100%'
                    }}
                  />
                  
                  {/* Loading overlay */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-jungle-100 to-jungle-200 dark:from-jungle-800 dark:to-jungle-900 flex items-center justify-center pointer-events-none z-20 rounded-xl"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="flex flex-col items-center gap-4"
                    >
                      <FileText className="h-16 w-16 text-jungle-600 dark:text-jungle-400 opacity-50" />
                      <p className="text-sm text-jungle-700 dark:text-jungle-300 opacity-70">Loading certificate...</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Footer with info */}
            <div className="px-8 py-4 bg-gradient-to-r from-jungle-500/5 via-jungle-400/5 to-jungle-500/5 dark:from-jungle-800/20 dark:via-jungle-700/20 dark:to-jungle-800/20 border-t-2 border-jungle-200/50 dark:border-jungle-700/50">
              <div className="flex items-center justify-center gap-4">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <FileText className="h-4 w-4" />
                  <span>Scroll to view full certificate</span>
                </motion.div>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Click outside to close</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

    </section>
  )
}

