export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-[1120px] items-center gap-10 px-5 pb-20 pt-20 sm:px-6 md:grid-cols-[1.15fr_.85fr] md:pb-24 md:pt-24"
    >
      <div>
        <h1 className="max-w-[650px] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-[54px]">
          Build Your Ideal
          <span className="block gradient-text">Development Stack</span>
        </h1>

        <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-slate-500">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#technologies"
            className="rounded-md brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-md border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-[260px] sm:w-[320px] md:w-[360px]">
          <img
            src="./assets/banner-stack.png"
            alt="Development Stack"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
