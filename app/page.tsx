"use client";

import { useState } from "react";
import { UserCard } from "./components/UserCard";

export default function Home() {
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

  const testApi = async () => {
    setLoading(true);
    setApiError(null);
    setApiMessage(null);
    try {
      const res = await fetch("/api/hello");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setApiMessage(data?.message ?? "Reponse inattendue");
    } catch (error) {
      setApiError("Erreur lors de l'appel API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-white px-4 py-12 font-sans text-zinc-900 sm:px-8 lg:px-12">
      <div className="w-full space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold sm:text-4xl">User Cards <span className="text-sm">(Exercice 1)</span></h1>
        </div>
 <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.email} name={user.name} email={user.email} />
          ))}
        </div>
        <div className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-800">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium">Tester l'API /api/hello (Exercice 2)</p>
              <p className="text-xs text-zinc-600">
                Clique sur le bouton pour recuperer le message.
              </p>
            </div>
            <button
              onClick={testApi}
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400"
              disabled={loading}
            >
              {loading ? "Chargement..." : "Appeler l'API"}
            </button>
          </div>
          <div className="min-h-[24px] text-xs sm:text-sm">
            {apiMessage && (
              <span className="text-green-700">Reponse : {apiMessage}</span>
            )}
            {apiError && <span className="text-red-600">{apiError}</span>}
          </div>
        </div>

        <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-800">
          <p className="font-medium">Connexion Firebase Auth (Exercice 3) :</p>
          <p>1) Installe firebase, cree un dossier `lib` et un fichier `firebase.ts` avec `initializeApp` configure via variables d'environnement.</p>
          <p>2) Dans ce fichier, exporte `auth = getAuth(getApps().length ? getApp() : initializeApp(config))`.</p>
          <p>3) Dans les composants client, importe `auth` et utilise `signInWithEmailAndPassword` ou `onAuthStateChanged` (pas dans les composants serveur).</p>
        </div>


      </div>
    </main>
  );
}
