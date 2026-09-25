import type { Technology } from "../types";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  return (
    <article className="flex min-h-[282px] flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-8 w-8 object-contain"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-[16px] font-bold text-slate-800">{technology.name}</h3>
      <p className="mt-2 line-clamp-3 min-h-[58px] text-[12px] leading-5 text-slate-400">
        {technology.description}
      </p>

      <div className="mt-auto">
        <div className="my-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-[10px]">
          <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">{technology.category}</span>
          <span className="text-slate-400">{technology.difficulty}</span>
          <span className="ml-auto flex items-center gap-1 font-medium text-slate-500">
            <span className="text-amber-400">★</span> {technology.rating}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`w-full rounded-md px-4 py-2.5 text-xs font-semibold transition ${
            isAdded
              ? "cursor-not-allowed bg-emerald-50 text-emerald-600"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}