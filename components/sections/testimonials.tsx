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
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-20 text-4xl font-medium tracking-tight md:text-5xl">
          Founder Stories
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-black/5 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xl leading-relaxed text-black/80">
                "{testimonial.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/5" />
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="mt-1 text-sm text-black/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
