import { UserCard } from "./components/UserCard";

export default function Home() {
  const users = [
    {
      name: "Marwa Ouji",
      email: "oujimarwa@hotmail.com",
    },
    {
      name: "Hajer Soltani",
      email: "soltanihajer39@gmail.com",
    },
    {
      name: "Zied Bousnina",
      email: "z.bousnina@campus.uniurb.it",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white px-4 py-12 font-sans text-zinc-900 sm:px-8 lg:px-12">
      <div className="w-full space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold sm:text-4xl">User Cards</h1>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.email} name={user.name} email={user.email} />
          ))}
        </div>
      </div>
    </main>
  );
}
