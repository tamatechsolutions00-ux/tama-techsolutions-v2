export default function Portfolio() {
  const projects = [
    "School Management ERP",
    "Hospital Management Software",
    "Hotel Management System",
    "Restaurant POS Software",
    "Inventory Management System",
    "E-Commerce Website",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-slate-900">
            Featured Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-slate-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item}
              </h3>

              <p className="text-slate-600 mb-6">
                Custom software solution built for business growth.
              </p>

              <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
                View Details
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}