"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School, Award, MapPin } from "lucide-react"

export default function Education() {
    const education = [
        {
            degree: "Master Of Computer Application",
            school: "MANIPAL UNIVERSITY",
            location: "JAIPUR, IN",
            date: "07/2025 - Present",
            color: "from-blue-500/10 to-purple-500/10",
            borderColor: "group-hover:to-blue-500",
            iconColor: "text-blue-500"
        },
        {
            degree: "Bachelor of Computer Application",
            school: "GURU GOBIND SINGH INDERPRASTHA UNIVERSITY",
            location: "DELHI, IN",
            date: "11/2022 - 07/2025",
            color: "from-amber-500/10 to-orange-500/10",
            borderColor: "group-hover:to-amber-500",
            iconColor: "text-amber-500"
        }
    ]

    return (
        <section id="education" className="py-24 bg-white dark:bg-jungle-950 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-jungle-100 dark:bg-jungle-900/30 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-[60px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-jungle-100 dark:bg-jungle-900 rounded-2xl mb-4 animate-spin-slow">
                        <Award className="h-8 w-8 text-jungle-600 dark:text-jungle-400" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Educational <span className="underline decoration-wavy decoration-jungle-500 underline-offset-8">Journey</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2, type: "spring" }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <Card className={`h-full relative overflow-hidden border-none bg-gradient-to-br ${edu.color} backdrop-blur-sm shadow-xl`}>

                                {/* Hover Border Animation */}
                                <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-br from-transparent ${edu.borderColor} [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />

                                {/* Floating Icons Background */}
                                <div className="absolute -right-4 -top-4 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                                    <School className="w-32 h-32" />
                                </div>

                                <CardContent className="p-8 flex flex-col items-center text-center h-full relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="p-4 bg-white dark:bg-slate-900 rounded-2xl mb-6 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                                    >
                                        <GraduationCap className={`h-10 w-10 ${edu.iconColor}`} />
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:scale-105 transition-transform">
                                        {edu.degree}
                                    </h3>

                                    <div className="w-12 h-1 bg-slate-300 dark:bg-slate-700 mb-4 rounded-full group-hover:w-24 group-hover:bg-current transition-all duration-300 text-jungle-500" />

                                    <p className="text-lg text-slate-700 dark:text-slate-300 font-semibold mb-1">
                                        {edu.school}
                                    </p>

                                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-6">
                                        <MapPin className="w-4 h-4" />
                                        <span>{edu.location}</span>
                                    </div>

                                    <div className="mt-auto relative overflow-hidden rounded-full py-2 px-6 bg-white/60 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10">
                                        <span className="relative z-10 text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400">
                                            {edu.date}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
