type UserCardProps = {
  name: string;
  email: string;
};

const getInitials = (fullName: string) =>
  fullName
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export function UserCard({ name, email }: UserCardProps) {
  const initials = getInitials(name);

  return (
    <article className="group h-full w-full rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center gap-4 sm:gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-base font-semibold text-zinc-800">
          {initials}
        </div>
        <div className="space-y-1">
          <p className="break-words text-lg font-semibold text-zinc-900">
            {name}
          </p>
          <p className="break-words text-sm text-zinc-600">{email}</p>
        </div>
      </div>
    </article>
  );
}
