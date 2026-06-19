import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-center">
      <Link
        href="/"
        className="
          flex
          h-20
          w-full
          max-w-3xl
          items-center
          justify-center
          rounded-b-full
          bg-[var(--foreground)]
          transition
          hover:brightness-95
        "
      >
        <h1 className="text-4xl font-bold text-strawberry">
          TDG Dictionary
        </h1>
      </Link>
    </header>
  );
}