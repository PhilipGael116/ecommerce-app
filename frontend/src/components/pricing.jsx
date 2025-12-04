import {Link} from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Zap } from 'lucide-react'

const pricingPlans = [
    {
        name: 'Starter',
        price: 'Free',
        period: '',
        description: 'Perfect for getting started',
        badge: null,
        features: [
            'List up to 10 products',
            'Basic seller dashboard',
            '5% commission per sale',
            'Standard product photos',
            'Email support (48hr response)',
            'Basic analytics',
            'Mobile app access'
        ],
        cta: 'Get Started',
        variant: 'outline',
        popular: false
    },
    {
        name: 'Professional',
        price: '$29',
        period: '/month',
        description: 'For growing businesses',
        badge: 'Most Popular',
        features: [
            'Unlimited product listings',
            'Advanced seller dashboard',
            '3% commission per sale',
            'Professional product photography',
            'Priority support (24hr response)',
            'Advanced analytics & insights',
            'Custom store branding',
            'Marketing & promotion tools',
            'Bulk upload & management',
            'Featured listings (5/month)',
            'Multi-channel selling',
            'Inventory management'
        ],
        cta: 'Start Free Trial',
        variant: 'default',
        popular: true
    },
    {
        name: 'Enterprise',
        price: '$99',
        period: '/month',
        description: 'For large-scale operations',
        badge: null,
        features: [
            'Everything in Professional',
            'Dedicated account manager',
            '1% commission per sale',
            'Premium store placement',
            '24/7 priority support',
            'Custom API access',
            'Advanced integrations',
            'White-label options',
            'Unlimited featured listings',
            'Custom reporting',
            'Early access to new features'
        ],
        cta: 'Contact Sales',
        variant: 'outline',
        popular: false
    }
]

export default function Pricing() {
    return (
        <section className="py-16 md:py-32 bg-muted/30" id='pricing'>
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-3xl space-y-6 text-center">
                    <Badge variant="outline" className="mb-2">
                        <Zap className="mr-1 size-3" />
                        Pricing Plans
                    </Badge>
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Start Selling Today</h1>
                    <p className="text-lg text-muted-foreground">
                        Choose the perfect plan for your business. All plans include secure payments, seller dashboard, and fraud protection.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <Card 
                            key={index} 
                            className={`flex flex-col relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
                        >
                            {plan.badge && (
                                <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                                    {plan.badge}
                                </span>
                            )}

                            <CardHeader>
                                <CardTitle className="text-xl">{plan.name}</CardTitle>
                                <div className="my-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                                </div>
                                <CardDescription>{plan.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1 space-y-4">
                                <hr className="border-dashed" />
                                <ul className="space-y-3 text-sm">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-2">
                                            <Check className="size-4 shrink-0 text-primary mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button asChild variant={plan.variant} className="w-full">
                                    <Link to="#">{plan.cta}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground mb-4">Trusted by over 500,000 sellers worldwide</p>
                    <div className="flex flex-wrap justify-center gap-6 items-center opacity-60">
                        <span className="text-xs font-medium">✓ No setup fees</span>
                        <span className="text-xs font-medium">✓ Cancel anytime</span>
                        <span className="text-xs font-medium">✓ 14-day free trial</span>
                        <span className="text-xs font-medium">✓ No credit card required</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
