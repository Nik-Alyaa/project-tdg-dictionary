"use client";

import { useMemo, useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col items-center text-center">
          <h1 className="mb-2 text-5xl font-bold text-matcha">
            Good Day, Yuuki! 🌸
          </h1>

          <p className="text-lg text-foreground/70">
            Here's a quick overview of your projects.
          </p>
        </div>
        <div className="bg-[var(--foreground)] rounded-3xl border border-matcha-border p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-white">
            Projects Dashboard
          </h1>

          <div className="mb-10 flex justify-center  ">
            <div className="w-full max-w-xl ">
              <input
                type="text"
                placeholder="🔍 Search project..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  rounded-full
                  border
                  border-matcha-border
                  bg-[var(--background)]
                  px-6
                  py-4
                  shadow-sm
                  outline-none
                "
              />
            </div>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="rounded-lg border border-matcha-border bg-matcha-card p-6 text-center text-gray-400 shadow-sm">
            No project found.
          </div>
        ) : (
          <div
            className="
              rounded-3xl
              border
              border-matcha-border
              bg-matcha-card
              p-6
              shadow-sm
            "
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  description={project.description}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}