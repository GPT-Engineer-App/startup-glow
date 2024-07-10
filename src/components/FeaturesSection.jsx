import { Package, Shield, Users } from "lucide-react";

const features = [
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: "Feature One",
    description: "Description for feature one.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Feature Two",
    description: "Description for feature two.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Feature Three",
    description: "Description for feature three.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Features</h2>
      <p className="text-lg text-muted-foreground mb-8">Discover what makes our product unique.</p>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-muted-foreground mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;