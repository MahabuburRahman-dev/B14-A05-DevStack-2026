import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types";
import StackSidebar from "./StackSidebar";
import TechnologyCard from "./TechnologyCard";

export default function TechnologiesSection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selected, setSelected] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");
        if (!response.ok) throw new Error("Could not load technology data.");
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error(error);
        toast.error("Could not load technology data.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const addToStack = (technology: Technology) => {
    if (selected.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelected((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id: string) => {
    const item = selected.find((technology) => technology.id === id);
    setSelected((current) =>
      current.filter((technology) => technology.id !== id),
    );
    if (item) toast.info(`${item.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (selected.length === 0) return;
    setSelected([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <section
      id="technologies"
      className="mx-auto max-w-[1120px] scroll-mt-20 px-5 pb-28 sm:px-6"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Explore the <span className="gradient-text">Technologies</span>
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-xl border border-slate-100 bg-white">
          <div className="spinner" />
          <p className="text-sm text-slate-400">Loading technologies...</p>
        </div>
      ) : (
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={selected.some((item) => item.id === technology.id)}
                onAdd={addToStack}
              />
            ))}
          </div>

          <StackSidebar
            selected={selected}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </div>
      )}
    </section>
  );
}
