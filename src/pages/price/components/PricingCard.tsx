import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PricingPlan {
  name: string;
  price: number;
  annualPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  delay?: number;
}

export function PricingCard({ plan, isAnnual, delay = 0 }: PricingCardProps) {
  const { t } = useTranslation();
  const price = isAnnual ? plan.annualPrice : plan.price;

  return (
    <div
      className={`liquid-glass rounded-2xl p-8 relative transition-all duration-300 hover:scale-105 ${
        plan.popular ? 'neon-glow border-2 border-primary/50' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full flex items-center gap-1 text-sm font-medium">
          <Star className="h-3 w-3" />
          {t('price.popular')}
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-bold neon-text">${price}</span>
          <span className="text-muted-foreground">{t('price.perMonth')}</span>
        </div>
      </div>

      <Button
        className={`w-full mb-8 ${plan.popular ? 'neon-glow' : ''}`}
        variant={plan.popular ? 'default' : 'outline'}
      >
        {t('price.getStarted')}
      </Button>

      <div className="space-y-4">
        <p className="text-sm font-medium text-muted-foreground">{t('price.features')}:</p>
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-primary/20 mt-0.5">
              <Check className="h-3 w-3 text-primary" />
            </div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
