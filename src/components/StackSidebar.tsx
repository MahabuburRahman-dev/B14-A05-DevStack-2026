import type { Technology } from "../types";

interface StackSidebarProps {
  selected: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({
  selected,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="rounded-xl border border-slate-100 bg-white p-4 shadow-card lg:sticky lg:top-24 lg:self-start">
      <h2 className="text-[16px] font-bold text-slate-800">Your Stack</h2>
      <p className="mt-1 text-[11px] text-slate-400">
        {selected.length} Technology{selected.length === 1 ? "" : "ies"}{" "}
        Selected
      </p>

      {selected.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-200 px-4 py-9 text-center text-xs text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-5 space-y-2">
          {selected.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5"
            >
              <img
                src={technology.icon}
                alt=""
                className="h-7 w-7 object-contain"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-slate-800">
                  {technology.name}
                </p>
                <p className="text-[9px] text-slate-400">
                  {technology.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
                className="text-xl leading-none text-slate-300 transition hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-md border border-red-300 py-2.5 text-xs font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}
