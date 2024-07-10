import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Basic",
    description: "Basic features for personal use.",
    price: "$10/month",
  },
  {
    title: "Pro",
    description: "Advanced features for professionals.",
    price: "$30/month",
  },
  {
    title: "Enterprise",
    description: "All features for large teams.",
    price: "$100/month",
  },
];

const PricingSection = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Pricing</h2>
      <p className="text-lg text-muted-foreground mb-8">Choose the plan that suits you best.</p>
      <div className="grid gap-8 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-muted-foreground mb-4">{plan.description}</p>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <Button variant="primary">Sign Up</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;