import { cn } from '@/lib/utils'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AdPopup from './ad-popup'
import CTA from './sections/shared/cta'
import Footer from './sections/shared/footer'
import Navbar from './sections/shared/navbar'
import SubscribePopup from './subscribe-popup'

interface LayoutProps {
    children: React.ReactNode
    className?: string
    props?: React.HTMLAttributes<HTMLDivElement>
}

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

const Layout = ({ children, className, ...props }: LayoutProps) => {
    return (
        <main className={cn("min-h-screen", className)} {...props}>
            <ScrollToTop />
            <Navbar />
            {children}
            <CTA />
            <Footer />
            <AdPopup />
            <SubscribePopup />
        </main>
    )
}

export default Layout