"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data/project";
import EnvironmentCard from "@/components/EnviromentCard";

export default function ProjectContent() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  const [activeTab, setActiveTab] = useState<
    "development" | "production"
  >("development");

  if (!project) {
    return <div className="p-6 text-center text-xl text-gray-400">Project not found</div>;
  }

  const currentData =
    activeTab === "development"
      ? project.development
      : project.production;

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Tabs */}
        <div className="relative z-10 flex">
          <button
            onClick={() => setActiveTab("development")}
            className={`
              rounded-t-[20px]
              px-8
              py-4
              font-semibold
              transition-all
              ${
                activeTab === "development"
                  ? "bg-[var(--secondary)] text-strawberry shadow-sm"
                  : "bg-[#FFECEF] text-strawberry/60"
              }
            `}
          >
            🍃 Development
          </button>

          <button
            onClick={() => setActiveTab("production")}
            className={`
              rounded-t-[20px]
              px-8
              py-4
              font-semibold
              transition-all
              ${
                activeTab === "production"
                  ? "bg-[var(--green-mild)] text-matcha-dark shadow-sm"
                  : "bg-[#F3F7E4] text-matcha-dark/60"
              }
            `}
          >
            🍃 Production
          </button>
        </div>

        {/* Content */}
        <div className="-mt-[1px]">
          <EnvironmentCard
            title={project.name}
            data={currentData}
          />
        </div>
      </div>
    </main>
  );
}