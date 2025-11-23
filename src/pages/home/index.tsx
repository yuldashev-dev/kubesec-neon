import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  BookOpen, 
  Code2, 
  Server, 
  Award, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Container,
  GitBranch,
  Shield,
  Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'KubeSec - Master DevOps & Cloud Engineering';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Learn DevOps and Cloud Engineering with hands-on labs, guided roadmaps, and project-based learning'
      );
    }
  }, []);

  const keyFeatures = [
    {
      icon: Server,
      title: 'Real Labs',
      description: 'Practice in production-like environments',
    },
    {
      icon: BookOpen,
      title: 'Guided Roadmaps',
      description: 'Structured learning paths for every skill level',
    },
    {
      icon: Code2,
      title: 'Project-Based Learning',
      description: 'Build real-world projects from scratch',
    },
    {
      icon: Rocket,
      title: 'Playground Clusters',
      description: 'Experiment safely in isolated environments',
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Industry-recognized credentials',
    },
  ];

  const courses = [
    { icon: Container, title: 'Kubernetes', color: 'text-primary' },
    { icon: Container, title: 'Docker', color: 'text-accent' },
    { icon: Code2, title: 'Terraform', color: 'text-primary-glow' },
    { icon: GitBranch, title: 'GitOps', color: 'text-accent-glow' },
    { icon: Shield, title: 'DevSecOps', color: 'text-primary' },
    { icon: Terminal, title: 'Linux', color: 'text-accent' },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert-Curated Content',
      description: 'Created by industry professionals with years of experience',
    },
    {
      icon: TrendingUp,
      title: 'Community-Driven',
      description: 'Learn alongside thousands of motivated engineers',
    },
    {
      icon: Clock,
      title: 'Always Updated',
      description: 'Content refreshed regularly with latest tools and practices',
    },
    {
      icon: CheckCircle2,
      title: 'Lifetime Access',
      description: 'One-time payment for unlimited access to all materials',
    },
  ];

  const testimonials = [
    {
      name: 'Sardor Karimov',
      role: 'DevOps Engineer',
      content: 'This platform transformed my career. The hands-on labs made all the difference.',
      avatar: 'SK',
    },
    {
      name: 'Dilnoza Abdullayeva',
      role: 'Cloud Architect',
      content: 'Best investment I made in my professional development. Highly recommend!',
      avatar: 'DA',
    },
    {
      name: 'Akbar Yusupov',
      role: 'Site Reliability Engineer',
      content: 'The playground clusters are a game-changer. Learn by doing, not just watching.',
      avatar: 'AY',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center py-20">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass border border-primary/30">
            <Rocket className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Learn. Build. Deploy.</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold neon-text leading-tight">
            Master DevOps & <br />Cloud Engineering
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Transform your career with hands-on training in Kubernetes, Docker, and cloud-native technologies
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Link to="/price">
              <Button size="lg" className="neon-glow group text-base h-12 px-8">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="liquid-glass text-base h-12 px-8">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive learning experience designed for practical mastery
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {keyFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="liquid-glass rounded-2xl p-6 hover:neon-glow transition-all duration-300 group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto p-4 rounded-xl bg-primary/20 w-fit mb-4 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Popular Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the most in-demand DevOps tools and technologies
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Link key={course.title} to="/services">
              <div
                className="liquid-glass rounded-2xl p-8 hover:neon-glow transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <course.icon className={`h-8 w-8 ${course.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Why Choose KubeSec?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of engineers advancing their careers with us
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <div
              key={item.title}
              className="liquid-glass rounded-2xl p-6 hover:neon-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-xl bg-accent/20 w-fit mb-4 group-hover:bg-accent/30 transition-colors">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from engineers who transformed their careers with KubeSec
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="liquid-glass rounded-2xl p-8 hover:neon-glow transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="liquid-glass rounded-3xl p-12 text-center neon-glow">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Ready to Level Up Your Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of engineers mastering DevOps and Cloud Engineering
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/price">
              <Button size="lg" className="neon-glow text-base h-12 px-8">
                View Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="liquid-glass text-base h-12 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
