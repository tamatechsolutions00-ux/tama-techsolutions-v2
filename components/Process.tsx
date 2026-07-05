export default function Process() {
  const steps = [
    "Free Consultation",
    "Requirement Analysis",
    "UI/UX Design",
    "Development",
    "Testing",
    "Launch & Support",
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-slate-900">
            Our Working Process
          </h2>

          <p className="text-slate-600 mt-4">
            Simple, transparent and result-driven process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                {index + 1}
              </div>

              <h3 className="font-bold text-slate-900">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}