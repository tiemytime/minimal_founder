export function Process() {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      description:
        "Deep dive into your needs, culture, and vision for the role.",
    },
    {
      number: "2",
      title: "Assessment",
      description:
        "Comprehensive evaluation of candidates beyond traditional metrics.",
    },
    {
      number: "3",
      title: "Matching",
      description:
        "Strategic pairing based on compatibility and complementary strengths.",
    },
    {
      number: "4",
      title: "Integration",
      description:
        "Ongoing support to ensure successful onboarding and alignment.",
    },
  ];

  return (
    <section id="process" className="bg-black/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            How We Work
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-black/60">
            A proven process refined through years of experience
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group flex gap-6 transition-all duration-300 hover:translate-x-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-lg font-medium text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                {step.number}
              </div>
              <div className="pt-1">
                <h3 className="text-2xl font-medium transition-colors group-hover:text-black/80">
                  {step.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-black/60">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
