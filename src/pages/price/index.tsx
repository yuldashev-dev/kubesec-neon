import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PricingCard } from './components/PricingCard';
import { pricingPlans } from './api/pricing-data';

export default function PricePage() {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    document.title = 'Pricing - KubeSec';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Choose the perfect security plan for your Kubernetes infrastructure. Flexible pricing for teams of all sizes.'
      );
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-5xl font-bold neon-text">{t('price.title')}</h1>
        <p className="text-xl text-muted-foreground">{t('price.subtitle')}</p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 pt-8">
          <span className={!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}>
            {t('price.monthly')}
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 liquid-glass rounded-full transition-all duration-300 hover:neon-glow"
            aria-label="Toggle billing period"
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 bg-primary rounded-full transition-transform duration-300 ${
                isAnnual ? 'translate-x-7' : ''
              }`}
            />
          </button>
          <span className={isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}>
            {t('price.annually')}
          </span>
          {isAnnual && (
            <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
              {t('price.save')}
            </span>
          )}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            isAnnual={isAnnual}
            delay={index * 100}
          />
        ))}
      </div>

      {/* Enterprise Contact */}
      <div className="mt-16 text-center">
        <div className="liquid-glass rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our sales team for enterprise pricing and custom features
          </p>
          <Button size="lg" className="neon-glow">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
}
