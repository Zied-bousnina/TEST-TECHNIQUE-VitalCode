TEST TECHNIQUE – VitalCode
============================================================

Réalisé par Zied Bousnina. Démo locale visible sur `/` (cartes utilisateurs + encart Firebase) et API sur `/api/hello`.

Prérequis rapides
-----------------
- Node.js 18+ et npm installés.


Lancement du projet
-------------------
1) Installer les dépendances : `npm install`
2) Démarrer le serveur de dev : `npm run dev`
3) Ouvrir `http://localhost:3000` pour voir les cartes et tester `/api/hello`.

Exercice 1 — Composant Next.js + Tailwind
------------------------------------------------------
- Chemin : `app/components/UserCard.tsx`, utilisé dans `app/page.tsx`.
- Affiche nom + email, avatar initiales, style Tailwind simple, responsive (grille 1→3 colonnes).
- Section principale pleine largeur pour voir trois cartes sur une ligne quand l’espace le permet.

Exercice 2 — Route API
----------------------------------
- Chemin : `app/api/hello/route.ts`
- GET retourne : `{ "message": "Hello VitalCode" }`

Exercice 3 — Firebase
---------------------------------

1) Installer `firebase`, créer un dossier `lib` et un fichier `firebase.ts` avec `initializeApp` configuré via variables d’environnement.
2) Exporter `auth = getAuth(getApps().length ? getApp() : initializeApp(config))`.
3) Dans les composants client, importer `auth` et utiliser `signInWithEmailAndPassword` / `onAuthStateChanged`



