import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-[280px] text-xs leading-5 text-slate-400">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-5 flex gap-4 text-xs font-medium text-slate-600">
            <a href="#github" className="hover:text-pink-500">GitHub</a>
            <a href="#twitter" className="hover:text-pink-500">Twitter</a>
            <a href="#linkedin" className="hover:text-pink-500">LinkedIn</a>
          </div>
        </div>

        <FooterColumn title="PRODUCT" links={["Home", "Technologies", "Projects"]} />
        <FooterColumn title="COMPANY" links={["About", "Contact", "Careers"]} />
        <FooterColumn title="LEGAL" links={["Privacy Policy", "Terms of Service"]} />
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-3 px-5 py-5 text-[11px] text-slate-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Dev Stack. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-slate-600">Privacy</a>
            <a href="#terms" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-[10px] font-bold tracking-wide text-slate-700">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`} className="text-xs text-slate-400 hover:text-slate-600">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}