import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact - KubeSec';
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold neon-text text-center mb-8">Contact Us</h1>
      <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
        Coming soon - get in touch with our team
      </p>
    </div>
  );
}
