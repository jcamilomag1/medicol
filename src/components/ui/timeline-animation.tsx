'use client'

import { motion, useInView } from "framer-motion"
import { useRef, forwardRef, RefObject } from "react"
import { cn } from "@/lib/utils"

interface TimelineContentProps {
  children: React.ReactNode
  animationNum: number
  timelineRef: RefObject<HTMLElement>
  className?: string
  customVariants?: {
    hidden: any
    visible: (i: number) => any
  }
  as?: keyof JSX.IntrinsicElements
}

export const TimelineContent = forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ children, animationNum, timelineRef, className, customVariants, as: Component = 'div' }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(timelineRef, { 
      once: true, 
      margin: "-100px" 
    })

    const defaultVariants = {
      hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(4px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          delay: animationNum * 0.2,
          duration: 0.5,
          ease: [0.21, 0.47, 0.32, 0.98],
        },
      },
    }

    const variants = customVariants ? {
      hidden: customVariants.hidden,
      visible: customVariants.visible(animationNum)
    } : defaultVariants

    return (
      <motion.div
        ref={ref || internalRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className={cn(className)}
      >
        {children}
      </motion.div>
    )
  }
)

TimelineContent.displayName = "TimelineContent"
