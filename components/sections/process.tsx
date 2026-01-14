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
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-black/60">
            A proven process refined through years of experience
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-lg font-medium text-white">
                {step.number}
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-black/60">
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
