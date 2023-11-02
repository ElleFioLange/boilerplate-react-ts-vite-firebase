# Boilerplate - React + TypeScript + Vite + Firebase

This boilerplate is for a React project using TS, Vite and Firebase.
It also comes with

- Husky for git hooks
- React Icons for icons
- Toastify for notifications/alerts
- React Router for route management

To get started, there are a few placeholders you will need to replace:

- Firebase: In [main.tsx](src/main.tsx), replace firebaseConfig.
- Favicon: Replace [favicon.svg](src/assets/favicon.svg).
- Package name: Replace the placeholder package name in [package.json](package.json)
- Global State: If you want to use the built in global state through react context hooks, update the state type declaration in [GlobalContext](src/context/GlobalContext.ts)

This boilerplate includes a few useful scripts:

- "dev:host": Runs "host" for testing on network devices (phones, etc.) and specifies [vite-host.config.ts](vite-host.config.ts) as the config file, which enables vite-plugin-terminal which sends any console messages to the terminal.
- "gac": git add . commit -m
- "gac:nv": git add . commit --no-verify -m (for when you want to commit even if there are linting problems)
- "gp": git pull && yarn install
- "sync": yarn gac:nv 'sync' && git push (I use this to sync between my laptop and desktop via my remote repo)
