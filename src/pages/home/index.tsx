import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Cloud, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'KubeSec - Enterprise Kubernetes Security';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Protect your cloud infrastructure with advanced Kubernetes security solutions'
      );
    }
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Advanced Protection',
      description: 'Multi-layer security for your Kubernetes clusters',
    },
    {
      icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust principles across your infrastructure',
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Built for modern cloud-native environments',
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring and threat detection',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center py-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass border border-primary/30">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Enterprise-Grade Security</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold neon-text leading-tight">
            {t('hero.title')}
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Link to="/price">
              <Button size="lg" className="neon-glow group">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="liquid-glass">
                {t('hero.learn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="liquid-glass rounded-2xl p-6 hover:neon-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="liquid-glass rounded-3xl p-12 text-center neon-glow">
          <h2 className="text-4xl font-bold mb-4 neon-text">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of companies protecting their Kubernetes clusters with KubeSec
          </p>
          <Link to="/contact">
            <Button size="lg" className="neon-glow">
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
