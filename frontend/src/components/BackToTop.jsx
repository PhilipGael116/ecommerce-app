import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Button
            onClick={scrollToTop}
            size="icon"
            className={cn(
                'fixed bottom-8 right-8 z-50 size-12 rounded-full shadow-lg transition-all duration-300',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
            )}
            aria-label="Back to top"
        >
            <ArrowUp className="size-5" />
        </Button>
    )
}