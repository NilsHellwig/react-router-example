# 🧭 React Router Beispiel (Vite)

Dies ist ein einfaches Beispielprojekt mit [React Router](https://reactrouter.com/) und Vite, das grundlegende Routing-Funktionalitäten demonstriert.

## 🔧 Funktionen

- Navigation zwischen **Startseite**, **Über uns**, **Kontakt**
- Dynamische Route für **Städte** (`/city/:city`)
- **404 Not Found**-Seite bei ungültigen Pfaden
- Beispiel für Zustandsverwaltung mit `useState`


## 🚀 Starten

1. Installieren der Abhängigkeiten:

   ```bash
   npm install

   ```

2. Entwicklung starten:
   ```bash
   npm run dev
   ```

## Beispiel Routen

| Pfad           | Komponente      |
| -------------- | --------------- |
| `/`            | Home            |
| `/about`       | About           |
| `/contact`     | Contact         |
| `/city/berlin` | City (`berlin`) |
| `/irgendwas`   | NotFound        |
