import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About - KubeSec';
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold neon-text text-center mb-8">About KubeSec</h1>
      <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
        Coming soon - learn more about our mission and team
      </p>
    </div>
  );
}
