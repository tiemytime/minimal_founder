export function Problem() {
  const challenges = [
    {
      title: "Surface-Level Evaluation",
      description:
        "Resumes and interviews only scratch the surface of a founder's true capabilities and potential.",
    },
    {
      title: "Cultural Misalignment",
      description:
        "Without deep understanding, even talented founders can fail to mesh with your company's values.",
    },
    {
      title: "High Stakes",
      description:
        "A wrong hire at the leadership level can cost months of progress and significant resources.",
    },
  ];

  return (
    <section id="problem" className="bg-black/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            The Challenge of Finding Great Founders
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-black/60">
            Traditional hiring fails to capture what makes founders exceptional
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-medium transition-colors group-hover:text-black/80">
                {challenge.title}
              </h3>
              <p className="mt-4 leading-relaxed text-black/60">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
