export interface PricingPlan {
  name: string;
  price: number;
  annualPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 99,
    annualPrice: 79,
    description: 'Perfect for small teams',
    features: [
      'Up to 5 clusters',
      'Basic security scanning',
      'Email support',
      'Weekly reports',
      'Community access',
    ],
  },
  {
    name: 'Professional',
    price: 299,
    annualPrice: 239,
    description: 'For growing businesses',
    features: [
      'Up to 20 clusters',
      'Advanced threat detection',
      'Priority support',
      'Daily reports',
      'Custom integrations',
      'SSO authentication',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 999,
    annualPrice: 799,
    description: 'For large organizations',
    features: [
      'Unlimited clusters',
      'Real-time monitoring',
      '24/7 dedicated support',
      'Custom SLAs',
      'Advanced compliance',
      'On-premise deployment',
      'Custom training',
      'Dedicated account manager',
    ],
  },
];
