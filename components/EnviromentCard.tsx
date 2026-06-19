interface Props {
title: string;
data: any;
}

export default function EnvironmentCard({
title,
data,
}: Props) {
return ( 
<div className=" border border-matcha-border bg-[var(--color-card)] p-8 shadow-sm"> <div className="grid gap-6 lg:grid-cols-3">

    {/* Left Side */}
    <div className="space-y-6">

      {/* Project Info */}
      <div className="rounded-3xl border border-matcha-border bg-white p-8 text-center shadow-sm">
        <h1 className="mb-4 text-5xl font-extrabold text-matcha-dark">
          {title}
        </h1>

        <p className="mb-6 text-lg text-gray-500">
          {data.description}
        </p>

        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-strawberry-light px-6 py-3 font-semibold text-strawberry transition hover:scale-105"
        >
          Open Website ↗
        </a>
      </div>

      {/* Notes */}
      <div className="rounded-3xl border border-matcha-border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-strawberry">
          🌸 Notes
        </h2>

        <p className="leading-8 text-gray-600">
          {data.notes}
        </p>
      </div>

    </div>

    {/* Right Side */}
    <div className="space-y-6 lg:col-span-2">

      {/* Credentials */}
      <div className="rounded-3xl border border-matcha-border bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-strawberry">
          🌸 Credentials
        </h2>

        <div className="overflow-hidden rounded-2xl border border-matcha-border">
          <table className="w-full">
            <thead>
              <tr className="bg-strawberry-light">
                <th className="px-4 py-3 text-left">
                  Role
                </th>
                <th className="px-4 py-3 text-left">
                  Username
                </th>
                <th className="px-4 py-3 text-left">
                  Password
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-matcha-border bg-white">
                <td className="px-4 py-3">
                  Admin
                </td>
                <td className="px-4 py-3">
                  {data.adminLogin.email}
                </td>
                <td className="px-4 py-3">
                  {data.adminLogin.password}
                </td>
              </tr>

              <tr className="border-t border-matcha-border bg-white">
                <td className="px-4 py-3">
                  User
                </td>
                <td className="px-4 py-3">
                  {data.userLogin.email}
                </td>
                <td className="px-4 py-3">
                  {data.userLogin.password}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ENV */}
      <div className="rounded-3xl border border-matcha-border bg-matcha-light p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-matcha-dark">
            🌿 Environment Variables
          </h2>

          <button
            onClick={() =>
              navigator.clipboard.writeText(data.env)
            }
            className="rounded-full bg-strawberry-light px-4 py-2 font-semibold text-strawberry transition hover:scale-105"
          >
            Copy
          </button>
        </div>

        <pre className="overflow-auto rounded-2xl bg-white p-5 text-sm leading-7 text-matcha-dark">
{data.env} </pre> </div>

    </div>
  </div>

  {/* Footer */}
  <div className="mt-6 rounded-3xl border border-matcha-border bg-[#FFF8F8] p-5 shadow-sm">
    <p className="text-center text-gray-500">
      🍓 Building with love for the TDG Team
    </p>
  </div>
</div>


);
}
