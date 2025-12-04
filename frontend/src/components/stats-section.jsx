import React from 'react'
import { Users, Store, Package, Star } from 'lucide-react'

const stats = [
    {
        icon: Users,
        value: '10M+',
        label: 'Active Buyers'
    },
    {
        icon: Store,
        value: '500K+',
        label: 'Trusted Sellers'
    },
    {
        icon: Package,
        value: '50M+',
        label: 'Products Sold'
    },
    {
        icon: Star,
        value: '4.8/5',
        label: 'Average Rating'
    }
]

export default function StatsSection() {
    return (
        <section className="bg-muted/30 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="mb-4 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                                <stat.icon className="size-7 text-primary" />
                            </div>
                            <div className="text-4xl font-bold">{stat.value}</div>
                            <div className="mt-2 text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}