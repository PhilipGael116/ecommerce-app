import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Eye, ShoppingCart } from 'lucide-react'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: '$199',
        image: 'https://images.unsplash.com/photo-1491927570842-0261e477d937?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
        category: 'Audio',
        photographer: 'Adam Birkett on Unsplash'
    },
    {
        id: 2,
        name: 'Premium Sneakers',
        price: '$129',
        image: 'https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
        category: 'Fashion',
        photographer: 'Hipkicks on Unsplash'
    },
    {
        id: 3,
        name: 'Smart Watch',
        price: '$299',
        image: 'https://images.unsplash.com/photo-1565593342443-ef01bfb8b907?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
        category: 'Electronics',
        photographer: 'David Švihovec on Unsplash'
    },
    {
        id: 4,
        name: 'Professional Camera',
        price: '$899',
        image: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
        category: 'Photography',
        photographer: 'Yoann Siloine on Unsplash'
    },
    {
        id: 5,
        name: 'MacBook Pro',
        price: '$1,299',
        image: 'https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
        category: 'Computers',
        photographer: 'Devin Pickell on Unsplash'
    },
    {
        id: 6,
        name: 'Travel Backpack',
        price: '$89',
        image: 'https://images.unsplash.com/photo-1520621312529-567168fbf786?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
        category: 'Accessories',
        photographer: 'Chris Knight on Unsplash'
    }
]

export default function ProductShowcase() {
    return (
        <AnimatedGroup
            variants={{
                container: {
                    visible: {
                        transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.75,
                        },
                    },
                },
                ...transitionVariants,
            }}>
            <div className="mask-b-from-55% relative mt-8 overflow-hidden px-2 sm:px-0 sm:mt-12 md:mt-20">
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-3 md:p-6 shadow-lg shadow-zinc-950/15 ring-1">
                    {/* White-ish overlay on top */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-transparent pointer-events-none z-10" />
                    
                    <div className="relative z-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                            {products.map((product) => (
                                <Card 
                                    key={product.id} 
                                    className="overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
                                >
                                    <div className="group relative aspect-square overflow-hidden bg-muted/30">
                                        <img
                                            src={product.image}
                                            alt={`${product.name} - Photo by ${product.photographer}`}
                                            className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                                            <div className="flex items-center gap-2 text-white mb-2 cursor-pointer">
                                                <Eye className="size-5" />
                                                <span className="text-sm font-medium">View Product Details</span>
                                            </div>
                                            <Button 
                                                size="sm" 
                                                className="w-full max-w-[200px] cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    // Add to cart logic here
                                                }}
                                            >
                                                <ShoppingCart className="size-4 mr-2" />
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                    <CardContent className="p-4">
                                        <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                                        <h3 className="font-semibold text-sm mb-2 line-clamp-1">{product.name}</h3>
                                        <p className="text-lg font-bold text-primary">{product.price}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <Button asChild size="lg" className="rounded-xl">
                                <Link to="#products">
                                    View More Products
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedGroup>
    )
}