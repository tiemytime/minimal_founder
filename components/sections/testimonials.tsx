export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The process revealed insights about potential co-founders that I never would have discovered through traditional interviews. It saved us from making a costly mistake.",
      author: "Sarah Chen",
      role: "CEO, TechVenture",
    },
    {
      quote:
        "Within three months, we found a CTO who not only had the technical skills but truly aligned with our mission and values. The difference has been transformative.",
      author: "Marcus Rodriguez",
      role: "Founder, InnovateLabs",
    },
  ];

  return (
    <section className="bg-black/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-16 text-3xl font-medium tracking-tight md:text-4xl">
          Founder Stories
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-black/80">
                "{testimonial.quote}"
              </p>
              <div className="mt-6">
                <div className="font-medium">{testimonial.author}</div>
                <div className="mt-1 text-sm text-black/60">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
