import React from 'react'
import { ShoppingCart, Store, Package, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const buyerFeatures = [
    {
        icon: ShoppingCart,
        title: 'Wide Product Selection',
        description: 'Browse thousands of products from verified sellers across multiple categories.'
    },
    {
        icon: ShieldCheck,
        title: 'Secure Payments',
        description: 'Shop with confidence using our encrypted payment system and buyer protection.'
    },
    {
        icon: Package,
        title: 'Fast Delivery',
        description: 'Get your orders delivered quickly with real-time tracking and updates.'
    }
]

const sellerFeatures = [
    {
        icon: Store,
        title: 'Easy Store Setup',
        description: 'Launch your online store in minutes with our intuitive seller dashboard.'
    },
    {
        icon: TrendingUp,
        title: 'Grow Your Business',
        description: 'Access powerful analytics and marketing tools to reach more customers.'
    },
    {
        icon: Users,
        title: 'Large Customer Base',
        description: 'Connect with millions of active buyers looking for products like yours.'
    }
]

export default function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Everything You Need to Buy & Sell</h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Whether you're shopping for the best deals or building your business, we've got you covered.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* For Buyers */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-center">For Buyers</h3>
                        <div className="grid gap-6 md:grid-cols-3">
                            {buyerFeatures.map((feature, index) => (
                                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10">
                                            <feature.icon className="size-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* For Sellers */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-center">For Sellers</h3>
                        <div className="grid gap-6 md:grid-cols-3">
                            {sellerFeatures.map((feature, index) => (
                                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10">
                                            <feature.icon className="size-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}