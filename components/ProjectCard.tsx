import Link from "next/link";

interface Props {
  id: string;
  name: string;
  description: string;
}

export default function ProjectCard({
  id,
  name,
  description,
}: Props) {
  return (
    <Link href={`/project/${id}`}>
      <div
        className="
          rounded-[28px]
          border
          border-matcha-border
          bg-[var(--color-card)]
          p-6
          shadow-sm
          transition-all
          duration-200
          hover:-translate-y-1
          hover:shadow-md
        "
      >
        {/* Header */}

        <div className="mb-5 flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-matcha-dark">
              {name}
            </h2>

            <p className="mt-3 text-gray-500">
              {description}
            </p>
          </div>

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-matcha-border
              text-2xl
              text-strawberry
            "
          >
            ☆
          </div>
        </div>

        {/* Tags */}

        <div className="mb-6 flex gap-3">
          <span
            className="
              rounded-full
              bg-matcha-light
              px-4
              py-2
              text-sm
              font-semibold
              text-matcha-dark
            "
          >
            Development
          </span>

          <span
            className="
              rounded-full
              bg-strawberry-light
              px-4
              py-2
              text-sm
              font-semibold
              text-strawberry
            "
          >
            Production
          </span>
        </div>

        {/* Footer */}

        <p className="text-sm text-gray-400">
          Updated recently
        </p>
      </div>
    </Link>
  );
}