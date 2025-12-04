import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
    shop: [
        { name: 'All Categories', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Best Sellers', href: '#' },
        { name: 'Deals & Offers', href: '#' },
        { name: 'Gift Cards', href: '#' }
    ],
    sell: [
        { name: 'Start Selling', href: '#' },
        { name: 'Seller Dashboard', href: '#' },
        { name: 'Seller Resources', href: '#' },
        { name: 'Pricing Plans', href: '#pricing' },
        { name: 'Success Stories', href: '#' }
    ],
    support: [
        { name: 'Help Center', href: '#' },
        { name: 'Track Order', href: '#' },
        { name: 'Returns & Refunds', href: '#' },
        { name: 'Shipping Info', href: '#' },
        { name: 'Contact Us', href: '#' }
    ],
    company: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press & Media', href: '#' },
        { name: 'Partnerships', href: '#' },
        { name: 'Blog', href: '#' }
    ]
}

const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
]

export default function Footer() {
    return (
        <footer className="bg-muted/30 border-t">
            <div className="mx-auto max-w-7xl px-6">
                {/* Main Footer Content */}
                <div className="py-12 md:py-16">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
                        {/* Brand & Description */}
                        <div className="lg:col-span-2">
                            <Link to="/" className="inline-block">
                                <h2 className="text-2xl font-bold">MarketPlace</h2>
                            </Link>
                            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                                Your trusted marketplace for buying and selling. Join millions of users worldwide.
                            </p>
                            
                            {/* Contact Info */}
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <Mail className="size-4 text-muted-foreground" />
                                    <a href="mailto:support@marketplace.com" className="hover:text-primary transition-colors">
                                        support@marketplace.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone className="size-4 text-muted-foreground" />
                                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                                <div className="flex items-start gap-3 text-sm">
                                    <MapPin className="size-4 text-muted-foreground mt-0.5" />
                                    <span className="text-muted-foreground">
                                        123 Commerce Street<br />San Francisco, CA 94102
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Shop Links */}
                        <div>
                            <h3 className="font-semibold mb-4">Shop</h3>
                            <ul className="space-y-3">
                                {footerLinks.shop.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.href} 
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Sell Links */}
                        <div>
                            <h3 className="font-semibold mb-4">Sell</h3>
                            <ul className="space-y-3">
                                {footerLinks.sell.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.href} 
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h3 className="font-semibold mb-4">Support</h3>
                            <ul className="space-y-3">
                                {footerLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.href} 
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.href} 
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="mt-12 rounded-xl border bg-card p-6 md:p-8">
                        <div className="grid gap-6 md:grid-cols-2 md:items-center">
                            <div>
                                <h3 className="text-xl font-semibold">Stay Updated</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Subscribe to get special offers, free giveaways, and exclusive deals.
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <Button>Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Bottom Footer */}
                <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} MarketPlace. All rights reserved.
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-wrap gap-4 text-sm">
                        <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                        <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                            Cookie Policy
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="inline-flex size-9 items-center justify-center rounded-md border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                <social.icon className="size-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}