import { useState } from "react";
import Logo from "./Logo";

const links = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between px-5 sm:px-6">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="mr-3 rounded-md p-1 text-slate-700 lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="lg:flex-1">
          <Logo />
        </div>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-[13px] font-medium transition hover:text-pink-500 ${
                link === "Home" ? "text-pink-600" : "text-slate-600"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 lg:flex-1 lg:justify-end">
          <a
            href="#signin"
            className="hidden text-[13px] font-medium text-slate-600 sm:inline"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="rounded-full brand-gradient px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Sign Up
          </a>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-[1120px] flex-col gap-3">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-pink-600"
              >
                {link}
              </a>
            ))}
            <a
              href="#signin"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 sm:hidden"
            >
              Sign In
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
