const testimonials = [
  {
    name: "John Doe",
    quote: "This product has changed my life for the better!",
    image: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    quote: "I can't imagine working without it.",
    image: "/placeholder.svg",
  },
  {
    name: "Sam Wilson",
    quote: "A must-have tool for any professional.",
    image: "/placeholder.svg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={testimonial.image} alt={testimonial.name} className="mx-auto object-cover w-24 h-24 rounded-full mb-4" />
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-muted-foreground mt-2">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;