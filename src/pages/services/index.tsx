import { useEffect } from 'react';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services - KubeSec';
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold neon-text text-center mb-8">Our Services</h1>
      <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
        Coming soon - comprehensive security services for your infrastructure
      </p>
    </div>
  );
}
