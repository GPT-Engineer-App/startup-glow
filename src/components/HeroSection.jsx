import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center p-8 text-center md:flex-row md:text-left">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Welcome to Acme Inc</h1>
        <p className="text-lg text-muted-foreground mb-6">Your solution for managing everything efficiently.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
      </div>
    </section>
  );
};

export default HeroSection;