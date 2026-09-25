interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <a
      href="#home"
      className="flex items-center gap-2"
      aria-label="Dev Stack home"
    >
      <span className="grid h-7 w-7 place-items-center rounded-md brand-gradient text-xs font-extrabold text-white">
        DS
      </span>
      {!compact && (
        <span className="text-[18px] font-bold tracking-tight">
          Dev <span className="gradient-text">Stack</span>
        </span>
      )}
    </a>
  );
}
