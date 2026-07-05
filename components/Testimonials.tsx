export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "School Director",
      text: "Excellent ERP solution and great support.",
    },
    {
      name: "Amit Singh",
      role: "Hotel Owner",
      text: "Professional team and timely delivery.",
    },
    {
      name: "Ravi Kumar",
      role: "Business Owner",
      text: "Website quality exceeded expectations.",
    },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-slate-900">
            Client Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="text-yellow-500 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-slate-600 mb-6">
                {item.text}
              </p>

              <h3 className="font-bold text-slate-900">
                {item.name}
              </h3>

              <p className="text-slate-500 text-sm">
                {item.role}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}