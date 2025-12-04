import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ShoppingCart, Store } from 'lucide-react'

export default function CTASection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Buyer CTA */}
                    <Card className="relative overflow-hidden border-primary/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                        <CardHeader className="relative">
                            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10">
                                <ShoppingCart className="size-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">Start Shopping Today</CardTitle>
                            <CardDescription className="text-base">
                                Discover amazing products from thousands of sellers. Free shipping on orders over $50.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="relative">
                            <Button asChild size="lg" className="w-full md:w-auto">
                                <Link href="#link">Browse Products</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Seller CTA */}
                    <Card className="relative overflow-hidden border-primary/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                        <CardHeader className="relative">
                            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10">
                                <Store className="size-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">Open Your Store</CardTitle>
                            <CardDescription className="text-base">
                                Join thousands of successful sellers. Start selling in minutes with zero upfront costs.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="relative">
                            <Button asChild size="lg" variant="outline" className="w-full md:w-auto">
                                <Link href="#link">Start Selling</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}