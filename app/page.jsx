import HeroSection from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";


export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Powerful Features for Your Career Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors duration-300"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex items-center flex-col justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="w-full py-12 md:py-24  bg-muted/50">
        <div className="container mx-auto px-4 md:px-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h2 className="text-4xl font-bold">50+</h2>
            <p className="text-muted-foreground">Industries Covered</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <h2 className="text-4xl font-bold">1000+</h2>
            <p className="text-muted-foreground">Interview Questions</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <h2 className="text-4xl font-bold">95+</h2>
            <p className="text-muted-foreground">Success Rate</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <h2 className="text-4xl font-bold">24/7</h2>
            <p className="text-muted-foreground">AI Support</p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              How It Works
            </h2>

            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors duration-300"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex items-center flex-col justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
